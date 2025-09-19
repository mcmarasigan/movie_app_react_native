import { Text, Image, ImageBackground } from 'react-native'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

type TabIconProps = {
  focused: boolean;
  icon: any;
  title: string;
};

const TabIcon = ({ focused, icon, title }: TabIconProps) => {
  if (focused) {
  return (
    <ImageBackground
      source={images.highlight}
      className='flex flex-row items-center justify-center flex-1 min-w-[112px] min-h-16 mt-4 rounded-full overflow-hidden'
    >
      <Image
        source={icon}
        tintColor={focused ? "#151312" : "#888"}
        className='size-6'
      />
      <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
    </ImageBackground>
  )
  } else {
    return (
      <Image
        source={icon}
        tintColor={focused ? "#151312" : "#888"}
        className='size-6 mt-4'
      />
    )
  }
}

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle:{
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 10,
          marginBottom: 36,
          height: 52,
          position: "absolute", 
          overflow: "hidden",
          borderTopWidth: 0,
        }
      }}
    >


        <Tabs.Screen 
        name="index" 
        options={{title: "Home", 
        headerShown:false, 
        tabBarIcon:({ focused }) => (
         <TabIcon 
         focused={focused}
         icon={icons.home} title="Home"
          />
        )
        
        }} 
        />

        <Tabs.Screen 
        name="search" 
        options={{title: "Search", 
        headerShown:false,
        tabBarIcon:({ focused }) => (
         <TabIcon 
         focused={focused}
         icon={icons.search} title="Search"
          />
        )
      
      }} 
        />

        <Tabs.Screen 
        name="saved" 
        options={{title: "Saved", 
        headerShown:false,
        tabBarIcon:({ focused }) => (
         <TabIcon 
         focused={focused}
         icon={icons.save} title="Saved"
          />
        )
      }} 
        />

        <Tabs.Screen 
        name="profile" 
        options={{title: "Profile", 
        headerShown:false,
        tabBarIcon:({ focused }) => (
         <TabIcon 
         focused={focused}
         icon={icons.person} title="Profile"
          />
        )
      }} 
        />

    </Tabs>
  

  )
}

export default _layout