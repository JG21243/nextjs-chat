export function LoginButton({
  provider,
  text = `Login with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`,
  showIcon = true,
  className,
  ...props
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <Button
      variant="outline"
      onClick={() => {
        setIsLoading(true);
        signIn(provider, { callbackUrl: `/` });
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
          // Increase the margin on the right side of the Google icon
          <IconGoogle className="mr-3" /> // was "mr-2", now "mr-3" for more space
        )
      ) : null}
      {text}
    </Button>
  );
}
