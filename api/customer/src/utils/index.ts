import bcrypt from 'bcrypt';
import amqplib, { Channel, ConsumeMessage } from 'amqplib';
import jwt from 'jsonwebtoken';

import { config } from '../config';

interface IService {
  SubscribeEvents: (payload: string) => void;
}

export const createJWT = ({
  email,
  isAdmin,
}: {
  email: string;
  isAdmin: boolean;
}) => {
  const token = jwt.sign(
    {
      email: email,
      isAdmin: isAdmin,
    },
    config.SECRET_KEY as string,
    { expiresIn: '30d' }
  );
  return token;
};

export const jwtDecode = async ({
  token,
}: {
  token: string;
}): Promise<{ email: string } | any> => {
  const decode = await jwt.verify(token, config.SECRET_KEY as string);
  return decode;
};

export const FormateData = (data: any) => {
  if (data) {
    return { data };
  } else {
    throw new Error('Data Not found!');
  }
};

export const CreateChannel = async () => {
  try {
    const connection = await amqplib.connect(config.MSG_QUEUE_URL as string);
    const channel = await connection.createChannel();
    await channel.assertExchange(config.EXCHANGE_NAME as string, 'direct', {
      durable: true,
    });
    await channel.assertQueue(config.EXCHANGE_NAME as string, {
      durable: true,
    });
    return channel;
  } catch (err) {
    throw err;
  }
};

export const PublishMessage = (
  channel: Channel,
  service: string,
  msg: string
): void => {
  channel.publish(config.EXCHANGE_NAME as string, service, Buffer.from(msg));
  console.log('Sent:', msg);
};

export const SubscribeMessage = async (
  channel: Channel,
  service: IService
): Promise<void> => {
  await channel.assertExchange(config.EXCHANGE_NAME as string, 'direct', {
    durable: true,
  });

  const q = await channel.assertQueue('', { exclusive: true });

  console.log(`Waiting for messages in queue: ${q.queue}`);

  await channel.bindQueue(
    q.queue,
    config.EXCHANGE_NAME as string,
    config.CUSTOMER_SERVICE as string
  );

  channel.consume(
    q.queue,
    (msg: ConsumeMessage | null) => {
      if (msg && msg.content) {
        const content = msg.content.toString();
        console.log('The message is:', content);
        service.SubscribeEvents(content);
      }
      console.log('[X] received');
    },
    { noAck: true }
  );
};
