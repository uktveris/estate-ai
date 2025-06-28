import Fastify from "fastify";
import dotenv from "dotenv";
import path from "path";

const envFile = `.env.${process.env.NODE_ENV || "development"}`;
dotenv.config({path: path.resolve(process.cwd(), envFile)});

const fastify = Fastify({ logger: true });

fastify.get("/", async (request, reply) => {
  return reply.code(200);
})

const port = Number(process.env.PORT) || 8080;

const start = async () => {
  await fastify.listen({ port: port });
}

start();
