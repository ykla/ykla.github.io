/**
 * @file configs/sidebar.ts
 * @brief Contains the SidebarConfig object.
 * @copyright Copyright (c) 2022 FreeBSD MFGA. All rights reserved.
 */

import type {SidebarConfig} from '@vuepress/theme-default';

export const sideBarConfig: SidebarConfig = [
  {
    text: 'FreeBSD MGFA',
    children: ['README.md'],
  },
  {
    text: 'Chapter 0 FreeBSD MFGA',
    children: [
      '/chapter-0.-freebsd-mfga/0.1.-deficiencies-of-freebsd.md',
    ],
  },
  {
    text: 'Chapter 1. Approaching FreeBSD',
    children: [
      '/chapter-1.-approaching-freebsd/1.1-what-is-unix.md',
      '/chapter-1.-approaching-freebsd/1.2-what-is-unix-like.md',
      '/chapter-1.-approaching-freebsd/1.3-what-is-linux.md',
      '/chapter-1.-approaching-freebsd/1.4-freebsd-and-other-operating-systems.md',
      '/chapter-1.-approaching-freebsd/1.5-why-use-freebsd.md',
      '/chapter-1.-approaching-freebsd/1.6-the-so-called-open-source-philosophy.md',
      '/chapter-1.-approaching-freebsd/1.7-other-bsd-introduction.md',
      '/chapter-1.-approaching-freebsd/1.8-linux-user-migration-guidelines.md',
      '/chapter-1.-approaching-freebsd/1.9-references-and-contributor-list.md',
      '/chapter-1.-approaching-freebsd/1.10-preparation-notes.md',
    ],
  },
  {
    text: 'Chapter 2. Installing FreeBSD',
    children: [
      '/chapter-2.-installing-freebsd/2.0-illustrated-installation.md',
      '/chapter-2.-installing-freebsd/2.1-comparison-of-three-virtual-machines-and-freebsd-versions.md',
      '/chapter-2.-installing-freebsd/2.2-freebsd-13.0-installation-based-on-virtual-box.md',
      '/chapter-2.-installing-freebsd/2.3-freebsd-13.0-installation-based-on-vmware-workstation-pro-16.md',
      '/chapter-2.-installing-freebsd/2.4-tencent-cloud-lightweight-cloud-and-other-servers-installation-freebsd.md',
      '/chapter-2.-installing-freebsd/2.5-manual-installation-of-freebsd.md',
      '/chapter-2.-installing-freebsd/2.6-ee-usage-and-network-configuration.md',
      '/chapter-2.-installing-freebsd/2.7-common-software-and-ssh-configuration.md',
      '/chapter-2.-installing-freebsd/2.8-physical-machine-installation-and-hardware-options.md',
      '/chapter-2.-installing-freebsd/2.9-configuration-of-the-graphics-card-under-the-physical-machine.md',
      '/chapter-2.-installing-freebsd/2.10-touchpad-settings-under-the-physical-machine.md',
      '/chapter-2.-installing-freebsd/2.11-physical-machine-sound-card-and-network-card-settings.md',
      '/chapter-2.-installing-freebsd/2.12-installation-of-the-printer.md',
      '/chapter-2.-installing-freebsd/2.13-wireless-bluetooth-mouse-settings.md',
    ],
  },
  {
    text: 'Chapter 3. Software Sources and Package Manager',
    children: [
      '/chapter-3.-software-sources-and-package-manager/3.0-package-manager-overview.md',
      '/chapter-3.-software-sources-and-package-manager/3.1-status-of-freebsd-mirror-sites.md',
      '/chapter-3.-software-sources-and-package-manager/3.2-freebsd-source-exchange-method.md',
      '/chapter-3.-software-sources-and-package-manager/3.3-usage-of-gitup.md',
      '/chapter-3.-software-sources-and-package-manager/3.4-usage-of-the-package-manager-pkg.md',
      '/chapter-3.-software-sources-and-package-manager/3.5-installing-software-via-source-ports.md',
      '/chapter-3.-software-sources-and-package-manager/3.6-installing-software-via-dvd.md',
    ],
  },
  {
    text: 'Chapter 4. Desktop Installation',
    children: [
      '/chapter-4.-desktop-installation/4.0-overview.md',
      '/chapter-4.-desktop-installation/4.1-installing-xorg.md',
      '/chapter-4.-desktop-installation/4.2-installing-kde-5.md',
      '/chapter-4.-desktop-installation/4.3-installing-gnome.md',
      '/chapter-4.-desktop-installation/4.4-installing-mate.md',
      '/chapter-4.-desktop-installation/4.5-installing-xfce.md',
      '/chapter-4.-desktop-installation/4.6-installing-cinnamon.md',
      '/chapter-4.-desktop-installation/4.7-installing-lumina.md',
      '/chapter-4.-desktop-installation/4.8-root-login-desktop.md',
      '/chapter-4.-desktop-installation/4.9-theme-and-beautification.md',
      '/chapter-4.-desktop-installation/4.10-remote-desktop-management.md',
      '/chapter-4.-desktop-installation/4.11-installing-wayland-optional.md',
    ],
  },
  {
    text: 'Chapter 5. Input Method and Common Software',
    children: [
      '/chapter-5.-input-method-and-common-software/5.1-fcitx-input-method-framework.md',
      '/chapter-5.-input-method-and-common-software/5.2-ibus-input-method-framework.md',
      '/chapter-5.-input-method-and-common-software/5.3-five-stroke-input-method.md',
      '/chapter-5.-input-method-and-common-software/5.4-installing-firefox-and-chromium.md',
      '/chapter-5.-input-method-and-common-software/5.5-linux-compatibility-layer.md',
      '/chapter-5.-input-method-and-common-software/5.6-installing-kingsoft-wps.md',
      '/chapter-5.-input-method-and-common-software/5.7-installing-qq.md',
      '/chapter-5.-input-method-and-common-software/5.8-changing-fonts.md',
      '/chapter-5.-input-method-and-common-software/5.9-wine.md',
      '/chapter-5.-input-method-and-common-software/5.10-compression-and-decompression.md',
    ],
  },
  {
    text: 'Chapter 6. File System and Disk Management',
    children: [
      '/chapter-6.-file-system-and-disk-management/6.1-ufs.md',
      '/chapter-6.-file-system-and-disk-management/6.2-zfs.md',
      '/chapter-6.-file-system-and-disk-management/6.3-disk-expansion.md',
      '/chapter-6.-file-system-and-disk-management/6.4-mounting-ntfs.md',
      '/chapter-6.-file-system-and-disk-management/6.5-swap-settings.md',
      '/chapter-6.-file-system-and-disk-management/6.6-ext-2-3-4-etc.-file-system.md',
    ],
  },
  {
    text: 'Chapter 7. VPN and Proxy',
    children: [
      '/chapter-7.-vpn-and-proxy/7.1-http-proxy.md',
      '/chapter-7.-vpn-and-proxy/7.2-v2ray.md',
      '/chapter-7.-vpn-and-proxy/7.3-clash.md',
      '/chapter-7.-vpn-and-proxy/7.4-openvpn.md',
      '/chapter-7.-vpn-and-proxy/7.5-wireguard.md',
    ],
  },
  {
    text: 'Chapter 8. Users and Permissions',
    children: [
      '/chapter-8.-users-and-permissions/8.1-sudo.md',
      '/chapter-8.-users-and-permissions/8.2-add-users.md',
      '/chapter-8.-users-and-permissions/8.3-user-groups.md',
      '/chapter-8.-users-and-permissions/8.4-user-privileges.md',
    ],
  },
  {
    text: 'Chapter 9. Jail',
    children: [
      '/chapter-9.-jail/9.1-comparing-jail-and-docker.md',
      '/chapter-9.-jail/9.2-jail-related-terms.md',
      '/chapter-9.-jail/9.3-jail-configuration.md',
      '/chapter-9.-jail/9.4-jail-update.md',
      '/chapter-9.-jail/9.5-manage-jail-with-ezjail.md',
    ],
  },
  {
    text: 'Chapter 10. Virtualization',
    children: [
      '/chapter-10.-virtualization/10.1-introduction-to-virtualization.md',
      '/chapter-10.-virtualization/10.2-installing-virtual-box.md',
      '/chapter-10.-virtualization/10.3-installation-bhyve.md',
      '/chapter-10.-virtualization/10.4-managing-bhyve-with-cbsd.md',
      '/chapter-10.-virtualization/10.5-installing-windows-11-with-bhyve.md',
      '/chapter-10.-virtualization/10.6-installing-xen.md',
      '/chapter-10.-virtualization/10.7-installing-windows-11-with-xen.md',
    ],
  },
  {
    text: 'Chapter 11. Update and Upgrade FreeBSD',
    children: [
      '/chapter-11.-update-and-upgrade-freebsd/11.1-updating-via-freebsd-update.md',
      '/chapter-11.-update-and-upgrade-freebsd/11.2-update-through-source-code.md',
      '/chapter-11.-update-and-upgrade-freebsd/11.3-batch-deployment.md',
    ],
  },
  {
    text: 'Chapter 12. GEOM Storage Framework',
    children: [
      '/chapter-12.-geom-storage-framework/12.1-overview.md',
      '/chapter-12.-geom-storage-framework/12.2-raid-0.md',
      '/chapter-12.-geom-storage-framework/12.3-raid-1.md'
      '/chapter-12.-geom-storage-framework/12.4-raid-3.md',
      '/chapter-12.-geom-storage-framework/12.5-soft-raid-configuration.md',
      '/chapter-12.-geom-storage-framework/12.6-geom-gate-network.md',
      '/chapter-12.-geom-storage-framework/12.7-disk-device-labeling.md',
      '/chapter-12.-geom-storage-framework/12.8-ufs-journaling-and-geom.md',
    ],
  },
  {
    text: 'Chapter 13. DTrace',
    children: [
      '/chapter-13.-dtrace/13.1-overview.md',
      '/chapter-13.-dtrace/13.2-enabling-dtrace.md',
      '/chapter-13.-dtrace/13.3-using-dtrace.md',
    ],
  },
  {
    text: 'Chapter 14. Network Management',
    children: [
      '/chapter-14.-network-management/14.1-ppp-dialing.md',
      '/chapter-14.-network-management/14.2-wifi.md',
      '/chapter-14.-network-management/14.3-usb-rndis.md',
      '/chapter-14.-network-management/14.4-bluetooth.md',
      '/chapter-14.-network-management/14.5-ipv6.md',
      '/chapter-14.-network-management/14.6-carp.md',
      '/chapter-14.-network-management/14.7-vlan.md',
      '/chapter-14.-network-management/14.8-tcp-bbr.md',
    ],
  },
  {
    text: 'Chapter 15. FreeBSD Firewall',
    children: [
      '/chapter-15.-freebsd-firewall/15.1-network-parameters-configuration-commands.md',
      '/chapter-15.-freebsd-firewall/15.2-pf.md',
      '/chapter-15.-freebsd-firewall/15.3-ipfw.md',
      '/chapter-15.-freebsd-firewall/15.4-ipfilter-ipf.md',
    ],
  },
  {
    text: 'Chapter 16. Servers',
    children: [
      '/chapter-16.-servers/16.1-ftp-server.md',
      '/chapter-16.-servers/16.2-dhcp-server.md',
      '/chapter-16.-servers/16.3-nodejs-related.md',
      '/chapter-16.-servers/16.4-dns-server.md',
      '/chapter-16.-servers/16.5-nis-server.md',
      '/chapter-16.-servers/16.6-postfix-server.md',
      '/chapter-16.-servers/16.7-samba-server.md',
      '/chapter-16.-servers/16.8-nfs-server.md',
      '/chapter-16.-servers/16.9-iscsi.md',
      '/chapter-16.-servers/16.10-webmin.md',
      '/chapter-16.-servers/16.11-rsync-synchronization-service.md',
      '/chapter-16.-servers/16.12-time-service.md',
      '/chapter-16.-servers/16.13-wildfly.md',
    ],
  },
  {
    text: 'Chapter 17. Web Server',
    children: [
      '/chapter-17.-web-server/17.1-apache.md',
      '/chapter-17.-web-server/17.2-nginx.md',
      '/chapter-17.-web-server/17.3-php-8.x.md',
      '/chapter-17.-web-server/17.4-mysql-5.x.md',
      '/chapter-17.-web-server/17.5-mysql-8.x.md',
      '/chapter-17.-web-server/17.6-typecho.md',
      '/chapter-17.-web-server/17.7-ssl-configuration.md',
      '/chapter-17.-web-server/17.8-postgresql-and-pgadmin4.md',
    ],
  },
  {
    text: 'Chapter 18. Raspberry Pi and Embedded',
    children: [
      '/chapter-18.-raspberry-pi-and-embedded/18.1-introduction-to-raspberry-pi.md',
      '/chapter-18.-raspberry-pi-and-embedded/18.2-system-installation.md',
      '/chapter-18.-raspberry-pi-and-embedded/18.3-using-the-configuration.md',
      '/chapter-18.-raspberry-pi-and-embedded/18.4-usb-nic-and-wifi.md',
      '/chapter-18.-raspberry-pi-and-embedded/18.5-risc-v.md',
    ],
  },
  {
    text: 'Chapter 19. Literary Stories',
    children: [
      '/chapter-19.-literary-stories/19.1-my-story-with-freebsd.md',
      '/chapter-19.-literary-stories/19.2-freebsd-and-cats-choosing-the-1.md',
      '/chapter-19.-literary-stories/19.3-linux-and-the-philosophy-of-suffering.md',
      '/chapter-19.-literary-stories/19.4-from-an-idea-to-see-if-freebsd-is-commercial-or-collegial.md',
      '/chapter-19.-literary-stories/19.5-the-linux-community-has-become-a-dirty-quagmire.md',
      '/chapter-19.-literary-stories/19.6-linux-is-lost-refuting-the-great-freebsd-defeat.md',
      '/chapter-19.-literary-stories/19.7-fiction-freebsd-from-getting-started-to-running.md',
    ],
  },
  {
    text: 'Chapter 20. Entertainment and Education',
    children: [
      '/chapter-20.-entertainment-and-education/20.1-games.md',
      '/chapter-20.-entertainment-and-education/20.2-audio-and-video-players.md',
      '/chapter-20.-entertainment-and-education/20.3-audio-and-video-editing.md',
      '/chapter-20.-entertainment-and-education/20.4-education.md',
      '/chapter-20.-entertainment-and-education/20.5-scientific-research-and-professional-tools.md',
    ],
  },
  {
    text: 'Chapter 21. Kernel',
    children: [
      '/chapter-21.-kernel/21.1-obtaining-freebsd-kernel-source-code.md',
      '/chapter-21.-kernel/21.2-modifying-kernel-source-code.md',
      '/chapter-21.-kernel/21.3-compiling-the-kernel.md',
      '/chapter-21.-kernel/21.4-kernel-analysis.md',
    ],
  },
  {
    text: 'Chapter 22. Programming and Development',
    children: [
      '/chapter-22.-programming-and-development/22.1-how-to-report-bugs.md',
      '/chapter-22.-programming-and-development/22.2-how-to-submit-a-package.md',
      '/chapter-22.-programming-and-development/22.3-how-to-participate-in-freebsd-collaboration.md',
      '/chapter-22.-programming-and-development/22.4-configuration-of-c-c++-environment.md',
      '/chapter-22.-programming-and-development/22.5-configuration-of-the-java-environment.md',
      '/chapter-22.-programming-and-development/22.6-configuration-of-the-qt-environment.md',
      '/chapter-22.-programming-and-development/22.7-python-and-vscode.md',
      '/chapter-22.-programming-and-development/22.8-configuration-of-the-rust-go-environment.md',
      '/chapter-22.-programming-and-development/22.9-csh-and-other-shells.md',
      '/chapter-22.-programming-and-development/22.10-debugging-freebsd-via-ida-7.md',
      '/chapter-22.-programming-and-development/22.11-git.md',
    ],
  },
  {
    text: 'Chapter 23. Boot and Recovery',
    children: [
      '/chapter-23.-boot-and-recovery/23.1-recovery-mode-and-password-reset.md',
      '/chapter-23.-boot-and-recovery/23.2-freebsd-multi-drive-efi-bootstrap-unification.md',
      '/chapter-23.-boot-and-recovery/22.3-freebsd-chinese-tty-console.md',
      '/chapter-23.-boot-and-recovery/23.4-boot-menu.md',
      '/chapter-23.-boot-and-recovery/23.5-grub-and-other-bootloaders.md',
    ],
  },
  {
    text: 'Chapter 24. FreeBSD Features',
    children: [
      '/chapter-24.-freebsd-features/24.1-bsd-init-managed-services.md',
      '/chapter-24.-freebsd-features/24.2-freebsd-directory-structure.md',
      '/chapter-24.-freebsd-features/24.3-bsdinstall-and-bsdconfig.md',
      '/chapter-24.-freebsd-features/24.4-disabling-sendmail.md',
      '/chapter-24.-freebsd-features/24.5-automatic-bsdlibc-library-text-generation-using-scripts.md',
      '/chapter-24.-freebsd-features/24.6-bsd-style-make-grep-sed-awk.md',
    ],
  },
  {
    text: 'Chapter 25. System Design and Analysis',
    children: [
      '/chapter-25.-system-design-and-analysis/25.1-freebsd-design-overview.md',
      '/chapter-25.-system-design-and-analysis/25.2-kernel.md',
      '/chapter-25.-system-design-and-analysis/25.3-process.md',
      '/chapter-25.-system-design-and-analysis/25.4-memory-management.md',
      '/chapter-25.-system-design-and-analysis/25.5-security.md',
      '/chapter-25.-system-design-and-analysis/25.6-i-o-system.md',
    ],
  },
  {
    text: 'Chapter 26. OpenBSD',
    children: [
      '/chapter-26.-openbsd/26.0-overview.md',
      '/chapter-26.-openbsd/26.1-installation.md',
      '/chapter-26.-openbsd/26.2-configuration.md',
      '/chapter-26.-openbsd/26.3-switching-mirror-stations.md',
      '/chapter-26.-openbsd/26.4-package-manager.md',
      '/chapter-26.-openbsd/26.5-desktop-and-other-software.md',
    ],
  },
  {
    text: 'Chapter 27. NetBSD',
    children: [
      '/chapter-27.-netbsd/27.0-overview.md',
      '/chapter-27.-netbsd/27.1-installation-and-configuration.md',
      '/chapter-27.-netbsd/27.2-source-exchange-and-package-manager.md',
      '/chapter-27.-netbsd/27.3-desktop-and-other-software.md',
    ],
  },
  {
    text: 'Chapter 28. DragonFlyBSD',
    children: [
      '/chapter-28.-dragonflybsd/28.0-overview.md',
      '/chapter-28.-dragonflybsd/28.1-installation-and-configuration.md',
    ],
  },
  {
    text: 'Chapter 29. Desktop Advanced Advancement',
    children: [
      '/chapter-29.-desktop-advanced-advancement/29.0-differences-and-links-between-window-manager-and-desktop.md',
      '/chapter-29.-desktop-advanced-advancement/29.1-installing-i3wm.md',
      '/chapter-29.-desktop-advanced-advancement/29.2-installing-cde.md',
      '/chapter-29.-desktop-advanced-advancement/29.3-installing-awesome.md',
      '/chapter-29.-desktop-advanced-advancement/29.4-installing-fvwm.md',
    ],
  },
];
