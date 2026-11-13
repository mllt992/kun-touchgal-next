import type { FC } from 'react'
import { Plus } from 'lucide-react'
import { Chip, Button, Input } from '@heroui/react'

interface ArrayAdderProps {
  label: string
  placeholder: string
  input: string
  setInput: (value: string) => void
  addItem: () => void
  removeItem: (index: number) => void
  dataSource: string[]
}

export const ArrayAdder: FC<ArrayAdderProps> = ({
  label,
  placeholder,
  input,
  setInput,
  addItem,
  removeItem,
  dataSource
}) => {
  return (
    <div className="space-y-2">
      <div className="flex space-x-2">
        <Input
          labelPlacement="outside"
          label={label}
          placeholder={placeholder}
          value={input}
          onChange={(e) => {
            e.preventDefault()
            setInput(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              // 输入法选字的回车不算提交, Safari 只能靠 keyCode 229 识别
              if (e.nativeEvent.isComposing || e.keyCode === 229) return
              addItem()
            }
          }}
        />
        <Button
          color="primary"
          variant="flat"
          onPress={addItem}
          className="self-end"
          isIconOnly
        >
          <Plus size={20} />
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {dataSource.map((item, index) => (
          <Chip key={index} onClose={() => removeItem(index)} variant="flat">
            {item}
          </Chip>
        ))}
      </div>
    </div>
  )
}
