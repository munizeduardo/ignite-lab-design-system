import './styles/global.css';

import { Logo } from './Logo'
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { EnvelopeSimple, Lock } from 'phosphor-react';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">Ignite Lab</Heading>
        <Text size="lg" className="text-gray-400 mt-1">Log in and start using!</Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-sm gap-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Email address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>

            <TextInput.Input type="email" id="email" placeholder='E-mail' />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input type="password" id="password" placeholder='********' /> 
          </TextInput.Root>
        </label>

        <label htmlFor="rememberMe" className="flex items-center gap-2">
          <Checkbox id='rememberMe' />
          <Text size="sm" className="text-gray-200">
            Remember me for 30 days
          </Text>
        </label>

        <Button type="submit" className="mt-4">Access platform</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">Forgot password?</a>
        </Text>

        <Text size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">Create new account</a>
        </Text>
      </footer>
    </div>
  )
}
