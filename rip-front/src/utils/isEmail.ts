const EMAIL_REGEX = /(^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$)/;

export const isEmail = (email: string) => EMAIL_REGEX.test(email);
