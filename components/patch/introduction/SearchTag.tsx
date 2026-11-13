import { Input } from '@heroui/input'
import { Button } from '@heroui/react'
import { Search } from 'lucide-react'
import { KunLoading } from '~/components/kun/Loading'

interface SearchTagsProps {
  query: string
  setQuery: (value: string) => void
  handleSearch: () => void
  searching: boolean
}

export const SearchTags = ({
  query,
  setQuery,
  handleSearch,
  searching
}: SearchTagsProps) => {
  return (
    <>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="可以用空格分隔您的搜索关键字"
        endContent={
          <Button
            isIconOnly
            variant="light"
            aria-label="搜索 Galgame 标签"
            onPress={handleSearch}
          >
            <Search />
          </Button>
        }
        onKeyDown={(e) => {
          // 输入法选字的回车不算提交, Safari 只能靠 keyCode 229 识别
          if (e.nativeEvent.isComposing || e.keyCode === 229) return
          if (e.key === 'Enter') handleSearch()
        }}
      />
      {searching && <KunLoading hint="正在搜索标签数据..." />}
    </>
  )
}
