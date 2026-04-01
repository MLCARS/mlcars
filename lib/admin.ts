export function isAdminEmail(email?: string | null) {
  const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase().trim()
  return !!email && !!adminEmail && email.toLowerCase().trim() === adminEmail
}
