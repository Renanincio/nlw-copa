import Fastify from "fastify";
import jwt from "@fastify/jwt";
import { fastifyCors } from "@fastify/cors";
import { poolRoutes } from "./routes/pool";
import { UserRoutes } from "./routes/user";
import { GuessesRoutes } from "./routes/guess";
import { authRoutes } from "./routes/auth";
import { gameRoutes } from "./routes/game";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(fastifyCors, {
    origin: "true",
  });

  await fastify.register(jwt, {
    secret: 'nlwcopa',
  })

  await fastify.register(poolRoutes);

  await fastify.register(GuessesRoutes);

  await fastify.register(UserRoutes);

  await fastify.register(authRoutes);

  await fastify.register(gameRoutes);

  await fastify.listen({ port: 3333, host: '0.0.0.0'  });
}

bootstrap();
