import React from 'react';
import './styles.css';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
    //Исходя из цифры возвращаем конец title
    function formatNumberSuffix(number) {

        const lastDigit = number % 10;
        if (number > 11 && number < 15){
            return 'раз'
        }
        if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
            return 'раза';
        } else {
            return 'раз';
        }
    }

  return (
    <div className='App'>
      <div className='App-head'>
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className='App-controls'>
        <button onClick={() => store.addItem()}>Добавить</button>
      </div>
      <div className='App-center'>
        <div className='List'>{
          list.map(item =>
            <div key={item.code} className='List-item'>
              <div className={'Item' + (item.selected ? ' Item_selected' : '')}
                   onClick={() => store.selectItem(item.code)}>
                <div className='Item-code'>{item.code}</div>
                  {/*<div className='Item-title'>{item.title}</div>*/}
                  {/*Если значение item.allocated > 0, тогда отображаем в title*/}
                  <div className='Item-title'>
                      {item.title} {item.allocated > 0 && `| выделяли ${item.allocated} ${formatNumberSuffix(item.allocated)}`}
                  </div>
                <div className='Item-actions'>
                  <button onClick={() => store.deleteItem(item.code)}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
