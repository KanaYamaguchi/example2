import React, { useState } from 'react';

/**
 * Appコンポーネント
 * 階乗計算機のメインコンポーネント
 */
const App: React.FC = () => {
  // 入力値と結果を管理
  const [inputValue, setInputValue] = useState<number | ''>('');
  const [result, setResult] = useState<string | null>(null);

  /**
   * 階乗を再帰的に計算する関数
   * @param num - 階乗を計算したい正の整数
   * @returns number - 階乗の計算結果
   */
  const calculateFactorial = (num: number): number => {
    if (num <= 1) return 1;
    return num * calculateFactorial(num - 1);
  };

  // 計算ボタンが押下時の処理
  const handleCalculate = () => {
    if (typeof inputValue === 'number' && inputValue >= 0) {
      const factorialResult = calculateFactorial(inputValue);
      setResult(inputValue + '! = ' + factorialResult);
    } else {
      setResult('エラー: 正の整数を入力してください。');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>階乗計算機</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value ? parseInt(e.target.value, 10) : '')}
        placeholder="正の整数を入力してください"
        style={{ padding: '10px', fontSize: '16px', width:'220px' }}
      />
      <button
        onClick={handleCalculate}
        style={{ marginLeft: '10px', padding: '10px', fontSize: '16px' }}
      >
        計算する
      </button>
      <p style={{ fontSize: '18px', marginTop: '20px', color: 'blue' }}>
        {result || '【結果表示】'}
      </p>
    </div>
  );
};

export default App;