
//A primeira coisa que fazemos é importar o useEffect junto com o useState do React:
import React, { useState, useEffect } from 'react';

//useEffect permite que a gente implemente efeitos colaterais, enquanto useState é utilizado para gerenciar o estado do componente.

function App() {
  const [contador, setContador] = useState(0);



  //Função do useEffect:

 // Essa função é passada como o primeiro argumento. Ela é executada toda vez que a variável contador for alterada. Nesse caso, o efeito simplesmente exibe no console o valor atualizado do contador.
  useEffect(() => {
    console.log('Contador mudou para:', contador);
  }, [contador]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default App;

//resumo
// useEffect é executado toda vez que o valor do estado contador muda, porque ele depende de contador.