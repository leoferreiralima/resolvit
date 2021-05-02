import { css } from 'styled-components'

export const Tab = css`
  .nav-item.nav-link {
    flex: 1;
    color: ${({ theme }) => theme.colors['orange.200']};
    text-align: center;
    &:hover {
      border-color: ${({ theme }) => theme.colors['orange.200']};
    }
  }

  .nav-item.nav-link.active {
    color: ${({ theme }) => theme.colors['white.400']};
    background-color: ${({ theme }) => theme.colors['orange.100']};
    border-color: ${({ theme }) => theme.colors['orange.200']};
  }

  .nav.nav-tabs {
    border-color: ${({ theme }) => theme.colors['orange.200']};
    align-items: stretch;
  }
`
