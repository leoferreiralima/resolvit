export default function (provider: 'github' | 'gitlab'): string {
  return `/api/oauth/${provider}/redirect`
}
