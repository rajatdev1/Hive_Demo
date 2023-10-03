




export interface DropdownProps {
    options: string[];
    selectedOption: string;
    onSelectOption: (option: string) => void;
  }
  
  const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption, onSelectOption }) => {
    return (
      <select value={selectedOption} onChange={(e) => onSelectOption(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };
  
  export default Dropdown;