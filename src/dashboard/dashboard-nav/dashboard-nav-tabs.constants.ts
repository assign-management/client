import { MdHome, MdLayers, MdPeople } from 'react-icons/md';
import { AiFillMessage } from 'react-icons/ai';
import { DashboardNavTabProps } from './dashboard-nav-tab-props.interface';

export const DASHBOARD_NAV_TABS = Object.freeze<DashboardNavTabProps[]>([
  { href: '/dashboard', label: 'Home', icon: MdHome },
  { href: '/dashboard/projects', label: 'Projects', icon: MdLayers },
  { href: '/dashboard/teams', label: 'Teams', icon: MdPeople },
  { href: '/dashboard/members', label: 'Members', icon: AiFillMessage },
]);
