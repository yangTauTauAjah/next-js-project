import React from 'react'
import styled from "styled-components";
import DashboardIcon from '@mui/icons-material/Dashboard';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import "../styles/style.css";

const SectionList: [React.ReactNode, string][] = [
  [<DashboardIcon />, 'Dashboard'],
  [<EqualizerIcon />, 'Analytics'],
  [<DescriptionIcon />, 'Invoice'],
  [<EmailIcon />, 'Message'],
  [<NotificationsIcon />, 'Notification'],
  [<SettingsIcon />, 'Settings'],
]

const Drawer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 6px;
  width: 218px;
  height: 100vh;
  background: #364153;
`;

const EmptySection = styled.div`
  // border: 1px red solid;
  pointer-events: none;
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  padding-left: 30px;
  color: #99B2C6;
  width: 100%;
  height: 50px;
`

function Section({ Icon, children }: { Icon: React.ReactNode, children: string }) {
  return (
    <EmptySection>
      {Icon}
      <p>{children}</p>
    </EmptySection>
  )
}


function drawer() {
  return (
    <Drawer>
      <div>
        <div className="border-2 border-red-600" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '130px'
        }}>
          <div>Logo</div>
          <h3>This is logo</h3>
        </div>
        {
          SectionList.map(([Icon, label], i) => (
            <Section Icon={Icon}>{label}</Section>
          ))
        }
      </div>
      <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        height: '50px',
        margin: '30px'
      }}>
        <AccountBoxIcon />
        <div>
          <p>Username</p>
          <p>Plan</p>
        </div>
        <LogoutIcon style={{marginLeft: 'auto'}} />
      </div>
    </Drawer>
  );
}

export default drawer;
