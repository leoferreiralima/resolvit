import { GithubLoginButton } from 'react-social-login-buttons'

import useOAuthUrl from '@/hooks/useOAuthUrl'

const GithubButton: React.FC = () => {
  const url = useOAuthUrl('github')
  return (
    <a href={url}>
      <GithubLoginButton className="mb-3" />
    </a>
  )
}

export default GithubButton
