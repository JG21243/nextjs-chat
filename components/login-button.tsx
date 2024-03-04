import * as React from 'react'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react';

import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconGitHub, IconGoogle, IconSpinner } from '@/components/ui/icons'

interface LoginButtonProps extends ButtonProps {
  provider: 'github' | 'google'
  text?: string
  showIcon?: boolean
}

export function LoginButton({
  provider,
  text = `Login with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`,
  showIcon = true,
  className,
  ...props
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <Button
      variant="outline"
      onClick={() => {
        setIsLoading(true)
        signIn(provider, { callbackUrl: `/` })
      }}
      disabled={isLoading}
      className={cn(className)}
      {...props}
    >
      {isLoading ? (
        <IconSpinner className="mr-2 animate-spin" />
      ) : showIcon ? (
        provider === 'github' ? (
          <IconGitHub className="mr-2" />
        ) : (
          <IconGoogle className="mr-2" />
        )
      ) : null}
      {text}
    </Button>
  )
}
