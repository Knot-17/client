import React from 'react';

import { ArrowForwardIcon, PLink, PH1, PlaningToolsContainer, ListIcon, DollarIcon, PeopleIcon } from './PlaningToolsElements';

const PlaningTools = () => {
    return (
        <div>
            
            <PlaningToolsContainer>

            <PLink><PH1>Planing Tools <ArrowForwardIcon/></PH1></PLink>

            <div className='flex mt-[30px] ml-[8.5%]'>
                <div >
                    <PLink className=' font-medium'>Your Plan</PLink>
                    <div className='mt-[20px]'>
                        <PLink className='flex text-[14px]'><ListIcon/>Check List</PLink>

                    
                    </div>
                    

                </div>

               
            </div>
            
            </PlaningToolsContainer>
        </div>
    );
}

export default PlaningTools;
