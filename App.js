import React, {useState} from 'react';
//Screens

//Components
import Screen from './src/components/Screen';
import AppTextInput from './src/components/AppTextInput';
import AppPicker from './src/components/AppPicker';

const categories = [
  {label: 'Muebles', value: 1},
  {label: 'Ropa', value: 2},
  {label: 'Cámaras', value: 3},
];

function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectedItem={item => setCategory(item)}
        items={categories}
        icon="apps"
        placheholder="Categoria"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
export default App;
