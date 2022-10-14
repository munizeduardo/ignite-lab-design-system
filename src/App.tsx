import './styles/global.css';

import { Logo } from './Logo'
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { EnvelopeSimple, Lock } from 'phosphor-react';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';
import { SignIn } from './pages/SignIn';

export function App() {
  return (
    <SignIn />
  )
}
