import CommonButton from '@/components/common-button/CommonButton.vue'
import IconWarningFilled from '@/components/icons/IconWarningFilled.vue'
import { ElIcon, ElMessageBox } from 'element-plus'

interface Options {
  title?: string
  content?: string
  confirmButtonText?: string
  cancelButtonText?: string
  // eslint-disable-next-line no-unused-vars
  onConfirm: (done: () => void) => void
  onCancel?: () => void
}
export default function deleteConfirm(options: Options) {
  const onCancel = () => {
    options.onCancel?.()
    ElMessageBox.close()
  }
  const onConfirm = () => {
    options.onConfirm(() => {
      ElMessageBox.close()
    })
  }
  ElMessageBox({
    message() {
      return (
        <>
          <div class="mt-16 flex ai-c">
            <ElIcon size="22px" color="var(--el-color-warning)">
              <IconWarningFilled />
            </ElIcon>
            <div class="el-message-box__title ml-8">
              {options.title || '确认删除吗？'}
            </div>
          </div>
          <div class="mt-16 pl-30">
            {options.content || '删除后将无法恢复，请谨慎操作！'}
          </div>
          <div class="flex jc-fe mt-50">
            <CommonButton type="ghost" onClick={onCancel}>
              {options.cancelButtonText || '取消'}
            </CommonButton>
            <CommonButton class="ml-24" onClick={onConfirm}>
              {options.confirmButtonText || '确定'}
            </CommonButton>
          </div>
        </>
      )
    },
    showClose: false,
    showCancelButton: false,
    showConfirmButton: false,
  })
}
