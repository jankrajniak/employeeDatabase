//IMPORT CUSTOM MODULES
import Cli from './cli.js';

const cli = new Cli();

const openingLogo = `                                                                                              ***** 
                                                                          *               *******   
                                                                     *****            ********      
                                                                   *****           *********        
                                                                 ******          *********          
    @@@@@@@@@@@@@                 @@@@@@@@@@@@@@@@            ********       *********              
  **###########@@@@             @################@@@      ****     *****************                
  ************#@@@@           @%***************%@@@@ #******   **********   *******                 
  ************#@@@@@         @***************#@@@@#*********    ******  #     ****                  
  ************#@@@@@       @#***************%@@@##**********     *****   **  *******                
  ************#@@@@@      %***************#@@@##*********************    #************              
  ************#@@@@@    @***************#@@@###************       *       **************            
  ************#@@@@@  @#***************%@@@##*************               ****************           
  ************#@@@@@@%***************#@@@%#*************                **  ***************         
  ************#@@@@@#***************%@@@%#**************         **        **   ***********         
  ************#@@@%***************#@@@@%***************        ****            *************        
  ************#@@***************#@@@@@@***************       ******          ****************       
  ************##***************%@@@@@ #**************                      *******************      
  ***************************#@@@@@@  **************                         *****************      
  **************************%@@@@@   **************                    *       ***************      
  *************************%@@@@@@   *************   *                **       ****************     
  ***************************@@@@@@  ************* ***               ***        ***************     
  ****************************#@@@@@@#**************              *****          **************     
  ******************************%@@@@#**************     *************           *************      
  ********************************@@@@##************     **********                ***********      
  *********************************#@@%##*************** *****                      **********      
  ***************%@@#****************%@####******************                        ********       
  *************%@@@@@%****************#%#####****************                        ********       
  ************#@@@@@@@@#****************#%####***************                         ******        
  ************#@@@@@    @*****************######************                          *****         
  ************#@@@@@     @%****************#%####**********                           ***           
  ************#@@@@@       @#****************######******                             **            
  ************#@@@@@         @*****************#####***                                             
  ************#@@@@@         @@%****************####%                                               
  %%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                               
  ################################################%####******                                       
  ***********************************************#####*********                                     
  ***********************************************#%###**********                                    
  ***********************************************#%###***********                                   
  ***********************************************#%###************                                  
  ***********************************************#%###*************                                 
  #####%%%%%%%%%%%%%%%%%%%%%%%%%%#***************#####**************                                
     @@@@@@@@@@@@@@@@@@@@@@@@@@%***************%%####*****************                              
                           @@#***************%@@###********************                             
                          @#***************#@@@@#***********************                            
                        @#***************#@@@@@@*************************                           
                      @#***************#@@@@@@  ***************************                         
                    @#***************#@@@@@@    ************ **************                         
                  @%****************@@@@@@      ************  ***************                       
                @#****************%@@@@@        ************   ***************                      
              @#****************%@@@@@          ************     **************                     
            @#****************#@@@@@@           *********************************                   
          @#****************#@@@@@@             **********************************                  
        @#****************#@@@@@@               ***********************************                 
      @#*****************@@@@@@                 ************************************                
    @#*****************@@@@@@@@                %*************************************               
  @#*****************@@@@@@@@@@@@@@@@@@@@@@@@@@@####**********************************              
 #******************########*********************#####**********************************            
%************************************************#####******              ***************           
%************************************************#%###******               ***************          
%************************************************#%###******                ***************         
%************************************************#%###******                 ****************       
%************************************************#####******                  ****************      
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                              `

console.log(openingLogo);

cli.menuOptions();