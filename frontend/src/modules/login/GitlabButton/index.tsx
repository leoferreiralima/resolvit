import { createButton, createSvgIcon } from 'react-social-login-buttons'

import useOAuthUrl from '@/hooks/useOAuthUrl'

import GitlabLogo from './gitlab-brands.svg'

const GitlabLoginButton = createButton({
  text: 'Log in with Gitlab',
  icon: createSvgIcon(GitlabLogo),
  iconFormat: name => `fa fa-${name}`,
  style: { background: '#6B53B8', textAlign: 'center' },
  activeStyle: { background: '#8367D3' }
})

const GitlabButton: React.FC = () => {
  const url = useOAuthUrl('gitlab')

  return (
    <a href={url}>
      <GitlabLoginButton className="mb-3" />
    </a>
  )
}

export default GitlabButton
