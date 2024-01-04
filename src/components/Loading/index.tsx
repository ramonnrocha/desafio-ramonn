import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import styled, { useTheme } from 'styled-components'

const Center = styled(Spin)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default function Loading() {
  const { colors } = useTheme()

  return (
    <Center
      indicator={
        <LoadingOutlined
          style={{ fontSize: 56, color: colors['base-button'] }}
          spin
        />
      }
    />
  )
}
