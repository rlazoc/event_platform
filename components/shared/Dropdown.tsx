import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

const categories = [
  { id: 1, name: 'Concert' },
  { id: 2, name: 'Conference' },
  { id: 3, name: 'Festival' },
  { id: 4, name: 'Party' },
  { id: 5, name: 'Seminar' },
  { id: 6, name: 'Workshop' }
]

type DropdownProps = {
  value?: string
  onChangeHandler?: (value: string) => void
}

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger>
        <SelectValue placeholder="Event Type" />
      </SelectTrigger>
      <SelectContent>
        {categories.map(category => (
          <SelectItem
            key={category.id}
            value={category.name}
            className="select-item p-regular-14"
          >
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default Dropdown
