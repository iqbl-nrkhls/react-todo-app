import React from 'react';

const FilterTodo = (props) => {
  const { filter, setFilter } = props;
  return (
    <>
      <button
        className={'font-bold text-sm '+(filter === 'all' ? 'text-[#3a7bfd]' : 'text-light-2 hover:text-white')}
        onClick={() => setFilter('all')}>
        All
      </button>
      <button
        className={'font-bold text-sm '+(filter === 'active' ? 'text-[#3a7bfd]' : 'text-light-2 hover:text-white')}
        onClick={() => setFilter('active')}>
        Active
      </button>
      <button
        className={'font-bold text-sm '+(filter === 'completed' ? 'text-[#3a7bfd]' : 'text-light-2 hover:text-white')}
        onClick={() => setFilter('completed')}>
        Completed
      </button>
    </>
  )
}

export default FilterTodo;