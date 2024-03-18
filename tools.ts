import {ChatBubbleIcon, CodeIcon, ImageIcon, SpeakerLoudIcon, VideoIcon } from "@radix-ui/react-icons"

const tool = [
    {
      label:"Conversation",
      icon: ChatBubbleIcon,
      color:"text-rose-500",
      href:"/conversation"
    },
  
    {
      label:"Image Generator",
      icon: ImageIcon,
      color:"text-indigo-400",
      href:"/conversation"
    },
  
    {
      label:"Video Generator",
      icon: VideoIcon,
      color:"text-orange-500",
      href:"/conversation"
    },
  
    {
      label:"Music Generator",
      icon: SpeakerLoudIcon,
      color:"text-lime-400",
      href:"/conversation"
    },
  
    {
      label:"Code Generator",
      icon: CodeIcon,
      color:"text-yellow-500",
      href:"/conversation"
    }
  ]

  export default tool;