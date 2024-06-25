import { useTranslation } from 'react-i18next';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Globe } from 'lucide-react';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    // Function to handle language change
    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className='rounded-md lg:p-2 p-4   w-fit lg:space-x-0 space-x-2' variant="outline" size="icon">
                    <Globe />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem className='cursor-pointer' onClick={() => handleLanguageChange('mr')}>

                        मराठी (Mr)
                    </DropdownMenuItem>
                    <DropdownMenuItem className='cursor-pointer' onClick={() => handleLanguageChange('en')}>
                        English
                    </DropdownMenuItem>
                    <DropdownMenuItem className='cursor-pointer' onClick={() => handleLanguageChange('en')}>
                        System
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default LanguageSwitcher;
