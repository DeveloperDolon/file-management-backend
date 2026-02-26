const otpStore = new Map<string, { otp: string; expiresAt: number }>();

function key(email: string, purpose: string): string {
  return `otp:${purpose}:${email.toLowerCase()}`;
}

export async function storeOTP(email: string, purpose: "email_verification" | "password_reset", otp: string, ttlSec: number): Promise<void> {
  // node-redis v4 automatically returns a promise
  await otpStore.set(key(email, purpose), { otp, expiresAt: Date.now() + ttlSec * 1000 });
}

export async function verifyOTP(email: string, purpose: "email_verification" | "password_reset", otp: string): Promise<boolean> {
  const k = key(email, purpose);
  const stored = otpStore.get(k);

  if (!stored || stored.expiresAt < Date.now()) {
    otpStore.delete(k);
    return false;
  }

  const match = stored.otp === otp;
  if (match) otpStore.delete(k);
  return match;
}

export async function resendAllowed(_email: string, _purpose: string): Promise<boolean> {
  // Implement rate-limiting if needed using INCR + EX
  return true;
}
