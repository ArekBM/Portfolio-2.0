// mui
import { IconButton, Tooltip } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// react
import { FC } from "react";

interface SocialMediaIconProps {
  svg?: string;
  title: string;
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ svg, title }) => {
  return (
      <Tooltip title={title} placement='bottom' arrow>
        <div
          className='flex items-center justify-center h-12 w-12 rounded-full bg-icons cursor-pointer hover:bg-secondary transition-all
            ease-linear duration-300'
          > 
            {svg === 'Github' ? (
              <Tooltip title='Github'>
                <IconButton>
                  <GitHubIcon className='text-white group-hover:text-secondary'/>
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title='LinkedIn'>
                <IconButton>
                  <LinkedInIcon className='text-white group-hover:text-secondary'/>
                </IconButton>
              </Tooltip>
            )}
          </div>
      </Tooltip>
    )
};

export default SocialMediaIcon;
