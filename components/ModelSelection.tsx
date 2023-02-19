'use client';
import React from 'react';
import Select from 'react-select';
import useSWR from 'swr';
const fetchModels = () => fetch('/api/getEngines').then((res) => res.json());
const ModelSelection = ({}) => {
  const {data: models, isLoading} = useSWR('models', fetchModels);
  const { data: model, mutate: setModel } = useSWR('model', {
    fallbackData: 'text-davinci-003'
  })

  return (
    <div className="mt-2">
      <Select
        className="mt-2"
        defaultValue={model}
        placeholder={model}
        options={models?.modelOptions}
        isSearchable={true}
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]"
        }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
};

export default ModelSelection;
// by Rokas with ❤️
