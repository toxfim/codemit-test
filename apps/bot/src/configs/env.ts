const { env } = Bun;

const getEnv = (key: string, isArray = false) => {
  const value = env[key];
  if (!value) throw new Error(`Missing environment variable: ${key}`);
  if (isArray) return value.split("/") as string[];
  return value;
};

export const botToken = getEnv("BOT_TOKEN");
