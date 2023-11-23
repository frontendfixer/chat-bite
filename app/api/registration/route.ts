import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import * as argon2 from 'argon2';
import { NextResponse } from 'next/server';
import {
  type Config,
  NumberDictionary,
  starWars,
  uniqueNamesGenerator,
} from 'unique-names-generator';

import { SignUpFormSchema } from '@/lib/schema/signUpSchema';
import prisma from '@/server/db';

export async function POST(req: Request) {
  const data: unknown = await req.json();

  const isDataValid = SignUpFormSchema.safeParse(data);
  if (!isDataValid.success) {
    return NextResponse.json({
      data: isDataValid.error,
      message: 'Server Error!',
      success: false,
    });
  }
  const { email, password } = isDataValid.data;

  try {
    const hashedPassword = await argon2.hash(password, {
      secret: Buffer.from(process.env.ARGON2_SECRET!),
    });

    const numberDictionary = NumberDictionary.generate({ length: 3 });
    const nameConfig: Config = {
      dictionaries: [starWars, numberDictionary],
      separator: '',
      length: 1,
      style: 'capital',
    };

    const name: string = uniqueNamesGenerator(nameConfig);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });
    return NextResponse.json({
      data: { id: user.id, user: user.name, email: user.email },
      message: 'User Created Successful',
      success: true,
    });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json({
          element: 'email',
          type: 'auth',
          message: 'User already exist!',
          success: false,
        });
      }
    }
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Hello World' });
}
