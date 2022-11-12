import IconMenuWorkCenter from '@/components/icons/IconMenuWorkCenter.vue'
import IconMenuRealtime from '@/components/icons/IconMenuRealtime.vue'
import IconMenuWorkSetting from '@/components/icons/IconMenuWorkSetting.vue'
import IconMenuElevator from '@/components/icons/IconMenuElevator.vue'
import IconMenuDataPanel from '@/components/icons/IconMenuDataPanel.vue'
import IconMenuOperateNotice from '@/components/icons/IconMenuOperateNotice.vue'
import IconMenuSystemSettings from '@/components/icons/IconMenuSystemSettings.vue'

type MenuListProps = {
  title: string
  path: string
  children?: MenuListProps[]
  icon?: typeof IconMenuWorkCenter
  disabled?: boolean
}
const menuList: MenuListProps[] = [
  { title: '工作台', path: '/Home', icon: () => <IconMenuWorkCenter /> },
  {
    title: '智能监控',
    path: '/Realtime',
    icon: IconMenuRealtime,
    disabled: true,
    children: [{ title: '运行实况', path: '/RunningFacts', disabled: true }],
  },
  {
    title: '工单管理',
    path: '/WorkSetting',
    icon: IconMenuWorkSetting,
    disabled: true,
  },
  {
    title: '档案',
    path: '/ElevatorArchives',
    icon: IconMenuElevator,
  },
  {
    title: '数据看板',
    path: '/DataPanel',
    icon: IconMenuDataPanel,
    disabled: true,
  },
  {
    title: '运营公告',
    path: '/OperateNotice',
    icon: IconMenuOperateNotice,
    disabled: true,
  },
  {
    title: '系统设置',
    path: '/systemManage',
    icon: IconMenuSystemSettings,
    disabled: true,
    children: [{ title: 'xxxx', path: '/BuildingInfo', disabled: true }],
  },
]

export default menuList
