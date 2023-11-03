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
              <div>
                <a href='https://github.com/ArekBM' rel='noreferrer' target='_blank' className='contact' >
                  <Tooltip title='Github'>
                    <IconButton>
                      <GitHubIcon className='text-white group-hover:text-secondary'/>
                    </IconButton>
                  </Tooltip>
                </a>
              </div>
            ) : (
              <div>
                <a href='https://www.linkedin.com/in/emiyake' rel='noreferrer' target='_blank' className='contact' >
                  <Tooltip title='LinkedIn'>
                    <IconButton>
                      <LinkedInIcon className='text-white group-hover:text-secondary'/>
                    </IconButton>
                  </Tooltip>
                </a>
              </div>
            )}
          </div>
      </Tooltip>
    )
};

export default SocialMediaIcon;
