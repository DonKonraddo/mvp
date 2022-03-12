import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, FC, useState } from 'react';

import { useStore } from '~/store';

export const MobxComponentText: FC = observer(() => {
  const [query, setQuery] = useState<string>('');
  const { dataStore } = useStore();
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <div>
        <input type="text" value={query} onChange={handleChange} />
        <button onClick={() => dataStore.addData(query)}>Add data</button>
      </div>
      <ul>
        <button>Add data</button>

        {dataStore.data.map((value) => (
          <li key={value}>
            <span>{value}</span>
            <button onClick={() => dataStore.removeData(value)}>
              Remove data
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
