import React from 'react'
import { notification } from 'antd'
import { CloseOutlined, WarningFilled } from '@ant-design/icons'

function Error (title, isSubtle = false) {
  notification.open({
    message: title,
    className: isSubtle ? 'ant-noti-custom noti-danger-subtle' : 'ant-noti-custom noti-danger',
    closeIcon: <CloseOutlined />,
    icon: <WarningFilled />,
  })
}

export {
  Error,
}
