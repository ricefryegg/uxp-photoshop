"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[3034],{96206:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return l},default:function(){return c}});var a=r(87462),o=r(63366),n=(r(15007),r(64983)),s=r(91515),i=["components"],l={},d={_frontmatter:l},u=s.Z;function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.mdx)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"file-io"},"File I/O"),(0,n.mdx)("h2",{id:"overview"},"Overview"),(0,n.mdx)("p",null,"File and folder access is an important part of many plugins. Files and folders can exist in these locations:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Inside the plugin folder itself."),(0,n.mdx)("li",{parentName:"ul"},"In temporary plugin-specific storage."),(0,n.mdx)("li",{parentName:"ul"},"External to the plugin, anywhere in the filesystem. Because of sandboxing requirements of recent OS releases, UXP does not allow arbitrary access to any file on the host system. Therefore, these files are accessed by making a request of the user (by showing a file-picker dialog) and obtaining a ",(0,n.mdx)("em",{parentName:"li"},"token"),"."),(0,n.mdx)("li",{parentName:"ul"},"In a UXP-specific secure store; this is for secure files that contain sensitive information. See ",(0,n.mdx)("em",{parentName:"li"},"Secure Storage"),", below."),(0,n.mdx)("li",{parentName:"ul"},"On the network (not covered here; see the ",(0,n.mdx)("a",{parentName:"li",href:"/uxp-photoshop/guides/uxp_guide/uxp-misc/network-io/"},"Networking")," section.)")),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"In the near future, UXP will provide a permissions system for persistent tokens so developers won’t need user interaction for the same path every session. For now, if you need constant access to a location to write and read files, please use the UXP sanctioned locations for your plugin, accessed by the methods listed in the FileSystemProvider object of UXP.")),(0,n.mdx)("h2",{id:"secure-storage"},"Secure Storage"),(0,n.mdx)("p",null,"Sometimes a plugin needs to store sensitive information such as external site tokens or passwords. For these cases, UXP offers Secure Storage, protected storage which can be used to store sensitive data\nper plugin."),(0,n.mdx)("p",null,"SecureStorage takes a key-value pair and encrypts the value before being\nstored. After encryption, it stores the key and the encrypted value pair. When the value\nis requested with an associated key, it's retrieved after being decrypted. Please note\nthat ",(0,n.mdx)("em",{parentName:"p"},"the key is not encrypted"),", thus it's not protected by the cryptographic operation."),(0,n.mdx)("p",null,"There are some caveats for using SecureStorage:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"SecureStorage is not appropriate for sensitive data which should be kept secret from the current user. SecureStorage is protected under the current user's account credentials. This means the encrypted data can be at risk of being decrypted with the current user's privilege.")),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Data in SecureStorage can be lost for various reasons. For an example, the user could uninstall the host application and delete the secure storage. Or, the cryptographic information used by the secure storage could be damaged by the user accidentally. This will result in loss of data without the secure storage being removed.")),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"SecureStorage should be regarded as a cache rather than a persistent storage. Data in SecureStorage should be able to be regenerated from plugins after the time of loss."))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-uxp-guide-uxp-misc-file-access-index-md-9bbde093c857d1675d1f.js.map