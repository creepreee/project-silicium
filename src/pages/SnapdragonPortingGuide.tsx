import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Smartphone, Wrench, GitBranch, FileText, Download, ExternalLink } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const SnapdragonPortingGuide = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Smartphone className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Snapdragon Device Porting Guide
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Complete guide for adding and porting Snapdragon devices to Project Silicium
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <Badge variant="outline" className="text-sm">
            <GitBranch className="h-3 w-3 mr-1" />
            Project Silicium
          </Badge>
          <Badge variant="secondary" className="text-sm">Snapdragon SoC</Badge>
        </div>
      </div>

      {/* Warning Alert */}
      <Alert className="mb-8 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertDescription className="text-amber-800 dark:text-amber-200">
          <strong>Important:</strong> This guide assumes you have basic knowledge of device tree structure, 
          kernel compilation, and UEFI development. Proceed with caution as improper modifications can brick your device.
        </AlertDescription>
      </Alert>

<Alert className="mb-8 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertDescription className="text-amber-800 dark:text-amber-200">
          <strong>ALERT:</strong>This Guide is Outdated! Remasters of these Guides will come soon.
        </AlertDescription>
      </Alert>

      <div className="grid gap-8">
        {/* Prerequisites */}
        
        <Card>
        <Alert className="mb-8 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertDescription className="text-amber-800 dark:text-amber-200">
          <strong><b>Warning:</b></strong> Booting Windows/Linux on Sony/Google Device will wipe your UFS Clean! (Unable to recover)
        </AlertDescription>
      </Alert>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5" />
              Description
            </CardTitle>
            <CardDescription>
              This Guide will show you how to create a UEFI Port for your Device.
            </CardDescription>
          </CardHeader>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5" />
              Requirements:
            </CardTitle>
            <CardDescription>
              To Port UEFI to your Phone, It needs the following things:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                {/*<h4 className="font-semibold">Hardware Requirements</h4>*/}
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Snapdragon-powered device with unlocked bootloader
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    xbl or uefi partition in /dev/block/by-name/
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    fdt in /sys/firmware/
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    A brain with knowledge in using Git and terminal
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Requirements recomended but optional</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Ubuntu 24.04  or Arch linux or any debian Linux destribution
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    WSL (WIndows SubSystem for Linux) or Virtual machine with linux installed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    Nano or vim in linux (there are text editors)
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 1: Device Tree Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Step 1: Copying Files
            </CardTitle>
            <CardDescription>
              Copying some necessary files to your computer
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">1.1 Copying fdt </h4>
                <p className="text-muted-foreground">
Lets begin with Copying Files.
  Copy the <code className="bg-muted px-1 rounded text-sm font-mono">fdt</code> file from 
  <code className="bg-muted px-1 rounded text-sm font-mono ml-1">/sys/firmware/</code></p>
  <p className="text-muted-foreground">
  you can get it using adb with root:
</p>

			<div className="bg-background p-3 rounded border font-mono text-sm">
			<p><code>{'adb shell "dd if=/sys/firmware/fdt of=/sdcard/<Device Codename>.img"'}</code></p>
			<p><code>{'adb pull /sdcard/<Device Codename>.img .'}</code></p>
                </div>
                <p className="text-muted-foreground mb-4">
		Rename <code className="bg-muted px-1 rounded text-sm font-mono">&lt;Device Codename&gt;.img</code> to <code className="bg-muted px-1 rounded text-sm font-mono">&lt;Device Codename&gt;.dtb</code>
		</p>
		<Alert className="mb-8 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertDescription className="text-amber-800 dark:text-amber-200">
          <strong>Note:</strong>        If it doesn't works for some devices(i.e. stuck on download mode with Samsung logo) try extracting dtb from boot.img
        </AlertDescription>
      </Alert>
      <p className="text-sm text-muted-foreground mb-4">
  Unpack the stock <code className="bg-muted px-1 rounded text-sm font-mono">boot.img</code> using Android Image Kitchen (AIK), and navigate to the <code className="bg-muted px-1 rounded text-sm font-mono">split_img</code> directory.
  There, you will find a file named <code className="bg-muted px-1 rounded text-sm font-mono">boot.img-dtb</code>.
  Rename this file to <code className="bg-muted px-1 rounded text-sm font-mono">&lt;Device Codename&gt;.dtb</code>.
</p>
<Alert className="mb-8 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertDescription className="text-amber-800 dark:text-amber-200">
          <strong>Note:</strong>        This can be maked only on Wsl or an Linux Distro
        </AlertDescription>
      </Alert>

 <div className="bg-background p-3 rounded border font-mono text-sm mb-4">
			<p><code>{'adb shell "dd if=/sys/firmware/fdt of=/sdcard/<Device Codename>.img"'}</code></p>
			<p><code>{'adb pull /sdcard/<Device Codename>.img .'}</code></p>
                </div>

<p className="text-sm text-muted-foreground mb-4">
  Now copy <code className="bg-muted px-1 rounded text-sm font-mono">.dts</code> and <code className="bg-muted px-1 rounded text-sm font-mono">.dtb</code> to <code className="bg-muted px-1 rounded text-sm font-mono">Mu-Silicium/Resources/DTBs/</code>.
</p>

<p className="text-sm text-muted-foreground mb-4">
  Now extract your <code className="bg-muted px-1 rounded text-sm font-mono">xbl</code> or <code className="bg-muted px-1 rounded text-sm font-mono">uefi</code> from <code className="bg-muted px-1 rounded text-sm font-mono">/dev/block/by-name/</code> and place it somewhere you can reach it:
</p>

<div className="bg-background p-3 rounded border font-mono text-sm mb-4">
  <p><code>{'adb shell'}</code></p>
  <p><code>{'dd if=/dev/block/by-name/<UEFI Partition> of=/<UEFI Partition>.img'}</code></p>
  <p><code>{'exit'}</code></p>
  <p><code>{'adb pull /<UEFI Partition>.img'}</code></p>
</div>

<p className="text-sm text-muted-foreground mb-4">
  After copying the <code className="bg-muted px-1 rounded text-sm font-mono">xbl</code> file or the <code className="bg-muted px-1 rounded text-sm font-mono">uefi</code> file, extract all UEFI binaries from it using <code className="bg-muted px-1 rounded text-sm font-mono">UEFIReader</code>.<br />
  A compiled version is pinned in <code className="bg-muted px-1 rounded text-sm font-mono">#general</code> in our Discord.<br />
  You can also compile it yourself:
</p>

<div className="bg-background p-3 rounded border font-mono text-sm mb-4">
  <p><code>{'# Linux'}</code></p>
  <p><code>{'# Install dotnet-sdk-8.0 for your distribution'}</code></p>
  <p><code>{'git clone https://github.com/WOA-Project/UEFIReader.git'}</code></p>
  <p><code>{'cd UEFIReader/'}</code></p>
  <p><code>{'dotnet build UEFIReader.sln'}</code></p>
  <p><code>{'# Now here you have a compiled version. Go to UEFIReader/bin/Debug/net8.0/'}</code></p>
</div>

<p className="text-sm text-muted-foreground mb-4">
  Here is how you use it:
</p>

<div className="bg-background p-3 rounded border font-mono text-sm mb-4">
  <p><code>{'# Windows'}</code></p>
  <p><code>{'UEFIReader.exe <UEFI Partition>.img out'}</code></p>
  <p><code>{'# Linux'}</code></p>
  <p><code>{'./UEFIReader <UEFI Partition>.img out'}</code></p>
</div>

<p className="text-sm text-muted-foreground mb-4">
  Now move all the output files from UEFIReader into <code className="bg-muted px-1 rounded text-sm font-mono">Mu-Silicium/Binaries/&lt;Device Codename&gt;/</code>.<br />
  Then execute <code className="bg-muted px-1 rounded text-sm font-mono">CleanUp.sh</code> in the binaries folder once.
</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 2: Create config file for your device */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Step 2: Creating the Config File
            </CardTitle>
            <CardDescription>
              Creating a device specific .conf device
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
               <p className="text-sm text-muted-foreground mb-4">
  Every device has its own config file to define some device-specific settings, like the SoC.<br />
  Create a file called <code className="bg-muted px-1 rounded text-sm font-mono">&lt;Device Codename&gt;.conf</code> in <code className="bg-muted px-1 rounded text-sm font-mono">Mu-Silicium/Resources/Configs/</code>.<br />
  It should contain at least the following:
</p>

<div className="bg-background p-3 rounded border font-mono text-sm mb-4">
  <p><code>{'# General Configs'}</code></p>
  <p><code>{'TARGET_DEVICE_VENDOR="<Device Vendor>"'}</code></p>
  <p><code>{'TARGET_MULTIPLE_MODELS=0'}</code></p>
  <p><code>{'TARGET_NUMBER_OF_MODELS=0'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'# Arch Config'}</code></p>
  <p><code>{'TARGET_ARCH="AARCH64"'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'# UEFI FD Configs'}</code></p>
  <p><code>{'TARGET_REQUIRES_BOOTSHIM=1'}</code></p>
  <p><code>{'TARGET_FD_BASE="<FD Base>"'}</code></p>
  <p><code>{'TARGET_FD_SIZE="<FD Size>"'}</code></p>
  <p><code>{'TARGET_FD_BLOCKS="<FD Blocks>"'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'# FDT Configs'}</code></p>
  <p><code>{'TARGET_CREATE_POINTER=0'}</code></p>
  <p><code>{'TARGET_POINTER_ADDRESS=0x0'}</code></p>
</div>

<p className="text-sm text-muted-foreground mb-4">
  <code className="bg-muted px-1 rounded text-sm font-mono">&lt;FD Base/Size Value&gt;</code> is the UEFI FD value from the memory map (<code className="bg-muted px-1 rounded text-sm font-mono">uefiplat.cfg</code>).<br />
  <code className="bg-muted px-1 rounded text-sm font-mono">&lt;FD Blocks&gt;</code> is the number of blocks the UEFI FD has, calculated as <code className="bg-muted px-1 rounded text-sm font-mono">&lt;UEFI FD Size&gt; / 0x1000</code>.<br />
  Modify <code className="bg-muted px-1 rounded text-sm font-mono">TARGET_ARCH</code> according to your architecture.
</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 3: Creating Files */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              Step 3: Creating Files
            </CardTitle>
            <CardDescription>
              Creating .fdf .dec and .dsc files for your device
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-4">
  Structure of the device files:
</p>
<div className="bg-background p-3 rounded border font-mono text-sm mb-4">
  <p><code>{'./Platforms/<Device Vendor>/<Device Codename>Pkg/'}</code></p>
  <p><code>{'├── Include'}</code></p>
  <p><code>{'│   ├── ACPI.inc'}</code></p>
  <p><code>{'│   ├── APRIORI.inc'}</code></p>
  <p><code>{'│   ├── DXE.inc'}</code></p>
  <p><code>{'│   └── RAW.inc'}</code></p>
  <p><code>{'├── Library'}</code></p>
  <p><code>{'│   ├── DeviceMemoryMapLib'}</code></p>
  <p><code>{'│   │   ├── DeviceMemoryMapLib.c'}</code></p>
  <p><code>{'│   │   └── DeviceMemoryMapLib.inf'}</code></p>
  <p><code>{'│   └── DeviceConfigurationMapLib'}</code></p>
  <p><code>{'│       ├── DeviceConfigurationMapLib.c'}</code></p>
  <p><code>{'│       └── DeviceConfigurationMapLib.inf'}</code></p>
  <p><code>{'├──FdtBlob'}</code></p>
  <p><code>{'|  └── <SoC Codename>-<Device Vendor>-<Device Codename>.dtb'}</code></p>
  <p><code>{'├── PlatformBuild.py'}</code></p>
  <p><code>{'├── <Device Codename>.dec'}</code></p>
  <p><code>{'├── <Device Codename>.dsc'}</code></p>
  <p><code>{'└── <Device Codename>.fdf'}</code></p>
</div>

              </div>
            </div>
          </CardContent>
          <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <GitBranch className="h-5 w-5" />
      Step 3.1: Creating .dsc & .dec & .fdf File
    </CardTitle>
      <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <GitBranch className="h-5 w-5" />
      Step 3.1.1: Creating .dsc File
    </CardTitle>
    <CardDescription>
      This file describes what and how modules, libraries, and components are to be built, as well as defining library instances that will be used when linking EDKII modules.
    </CardDescription>
  </CardHeader>
  </CardHeader>
  <CardContent className="space-y-6">
    <div className="space-y-4">
      <div className="bg-muted/50 p-4 rounded-lg">
<p className="text-sm text-muted-foreground mb-4">
  Create a file named <code>{'<Device Codename>.dsc'}</code> inside the directory:
</p>

<div className="bg-background p-3 rounded border font-mono text-sm mb-4">
  <p><code>{'./Platforms/<Device Vendor>/<Device Codename>Pkg/<Device Codename>.dsc'}</code></p>
</div>

<p className="text-sm text-muted-foreground mb-4">
  Use the following template:
</p>
<div className="bg-background p-3 rounded border font-mono text-sm mb-4">
  <p><code>{'##'}</code></p>
  <p><code>{'#'}</code></p>
  <p><code>{'#  Copyright (c) 2011 - 2022, ARM Limited. All rights reserved.'}</code></p>
  <p><code>{'#  Copyright (c) 2014, Linaro Limited. All rights reserved.'}</code></p>
  <p><code>{'#  Copyright (c) 2015 - 2020, Intel Corporation. All rights reserved.'}</code></p>
  <p><code>{'#  Copyright (c) 2018, Bingxing Wang. All rights reserved.'}</code></p>
  <p><code>{'#  Copyright (c) Microsoft Corporation.'}</code></p>
  <p><code>{'#'}</code></p>
  <p><code>{'#  SPDX-License-Identifier: BSD-2-Clause-Patent'}</code></p>
  <p><code>{'#'}</code></p>
  <p><code>{'##'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'################################################################################'}</code></p>
  <p><code>{'#'}</code></p>
  <p><code>{'# Defines Section - statements that will be processed to create a Makefile.'}</code></p>
  <p><code>{'#'}</code></p>
  <p><code>{'################################################################################'}</code></p>
  <p><code>{'[Defines]'}</code></p>
  <p><code>{'  PLATFORM_NAME                  = <Device Codename>'}</code></p>
  <p><code>{'  PLATFORM_GUID                  = <GUID>'}</code></p>
  <p><code>{'  PLATFORM_VERSION               = 0.1'}</code></p>
  <p><code>{'  DSC_SPECIFICATION              = 0x00010005'}</code></p>
  <p><code>{'  OUTPUT_DIRECTORY               = Build/<Device Codename>Pkg'}</code></p>
  <p><code>{'  SUPPORTED_ARCHITECTURES        = AARCH64'}</code></p>
  <p><code>{'  BUILD_TARGETS                  = RELEASE|DEBUG'}</code></p>
  <p><code>{'  SKUID_IDENTIFIER               = DEFAULT'}</code></p>
  <p><code>{'  FLASH_DEFINITION               = <Device Codename>Pkg/<Device Codename>.fdf'}</code></p>
  <p><code>{'  USE_CUSTOM_DISPLAY_DRIVER      = 0'}</code></p>
  <p><code>{'  HAS_BUILD_IN_KEYBOARD          = 0'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  # If your SoC has multimple variants define the Number here'}</code></p>
  <p><code>{'  # If not don\'t add this Define'}</code></p>
  <p><code>{'  SOC_TYPE                       = 2'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'# If your SoC has multiple variants keep these Build Options'}</code></p>
  <p><code>{'# If not don\'t add "-DSOC_TYPE=$(SOC_TYPE)" to the Build Options.'}</code></p>
  <p><code>{'[BuildOptions]'}</code></p>
  <p><code>{'  *_*_*_CC_FLAGS = -DSOC_TYPE=$(SOC_TYPE) -DHAS_BUILD_IN_KEYBOARD=$(HAS_BUILD_IN_KEYBOARD)'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'[LibraryClasses]'}</code></p>
  <p><code>{'  DeviceMemoryMapLib|<Device Codename>Pkg/Library/DeviceMemoryMapLib/DeviceMemoryMapLib.inf'}</code></p>
  <p><code>{'  DeviceConfigurationMapLib|<Device Codename>Pkg/Library/DeviceConfigurationMapLib/DeviceConfigurationMapLib.inf'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'[PcdsFixedAtBuild]'}</code></p>
  <p><code>{'  # DDR Start Address'}</code></p>
  <p><code>{'  gArmTokenSpaceGuid.PcdSystemMemoryBase|<Start Address>'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  # Device Maintainer'}</code></p>
  <p><code>{'  gSiliciumPkgTokenSpaceGuid.PcdDeviceMaintainer|"<Your Github Name>"'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  # CPU Vector Address'}</code></p>
  <p><code>{'  gArmTokenSpaceGuid.PcdCpuVectorBaseAddress|<CPU Vector Base Address>'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  # UEFI Stack Addresses'}</code></p>
  <p><code>{'  gEmbeddedTokenSpaceGuid.PcdPrePiStackBase|<UEFI Stack Base Address>'}</code></p>
  <p><code>{'  gEmbeddedTokenSpaceGuid.PcdPrePiStackSize|<UEFI Stack Size>'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  # SmBios'}</code></p>
  <p><code>{'  gSiliciumPkgTokenSpaceGuid.PcdSmbiosSystemManufacturer|"<Device Vendor>"'}</code></p>
  <p><code>{'  gSiliciumPkgTokenSpaceGuid.PcdSmbiosSystemModel|"<Device Model>"'}</code></p>
  <p><code>{'  gSiliciumPkgTokenSpaceGuid.PcdSmbiosSystemRetailModel|"<Device Codename>"'}</code></p>
  <p><code>{'  gSiliciumPkgTokenSpaceGuid.PcdSmbiosSystemRetailSku|"<Device_Model>_<Device_Codename>"'}</code></p>
  <p><code>{'  gSiliciumPkgTokenSpaceGuid.PcdSmbiosBoardModel|"<Device Model>"'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  # Simple FrameBuffer'}</code></p>
  <p><code>{'  gSiliciumPkgTokenSpaceGuid.PcdMipiFrameBufferWidth|<Display Width>'}</code></p>
  <p><code>{'  gSiliciumPkgTokenSpaceGuid.PcdMipiFrameBufferHeight|<Display Height>'}</code></p>
  <p><code>{'  gSiliciumPkgTokenSpaceGuid.PcdMipiFrameBufferColorDepth|<Display Color Depth>'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  # Dynamic RAM Start Address'}</code></p>
  <p><code>{'  gQcomPkgTokenSpaceGuid.PcdRamPartitionBase|<Free DDR Region Start Address>'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  # SD Card Slot'}</code></p>
  <p><code>{'  gQcomPkgTokenSpaceGuid.PcdInitCardSlot|TRUE'}</code></p>
  <p><code>{'  # If your Phone has no SD Card Slot, Set it to FALSE.'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  # USB Controller'}</code></p>
  <p><code>{'  gQcomPkgTokenSpaceGuid.PcdStartUsbController|TRUE'}</code></p>
  <p><code>{'  # This should be TRUE unless your UsbConfigDxe is Patched to be Dual Role.'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'[PcdsDynamicDefault]'}</code></p>
  <p><code>{'  gEfiMdeModulePkgTokenSpaceGuid.PcdVideoHorizontalResolution|<Display Width>'}</code></p>
  <p><code>{'  gEfiMdeModulePkgTokenSpaceGuid.PcdVideoVerticalResolution|<Display Height>'}</code></p>
  <p><code>{'  gEfiMdeModulePkgTokenSpaceGuid.PcdSetupVideoHorizontalResolution|<Display Width>'}</code></p>
  <p><code>{'  gEfiMdeModulePkgTokenSpaceGuid.PcdSetupVideoVerticalResolution|<Display Height>'}</code></p>
  <p><code>{'  gEfiMdeModulePkgTokenSpaceGuid.PcdSetupConOutColumn|<Setup Con Column>'}</code></p>
  <p><code>{'  gEfiMdeModulePkgTokenSpaceGuid.PcdSetupConOutRow|<Setup Con Row>'}</code></p>
  <p><code>{'  gEfiMdeModulePkgTokenSpaceGuid.PcdConOutColumn|<Con Column>'}</code></p>
  <p><code>{'  gEfiMdeModulePkgTokenSpaceGuid.PcdConOutRow|<Con Row>'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'!include <SoC Codename>Pkg/<SoC Codenmae>.dsc.inc'}</code></p>
</div>
<p className="text-sm text-muted-foreground mb-4 space-y-2">
  <span className="block">
    <strong>&lt;GUID&gt;</strong> is a value to identify your device. Generate one <a href="https://www.guidgenerator.com/" className="underline text-blue-500" target="_blank">here</a>. Make sure it's uppercase.
  </span>
  <span className="block">
    <strong>&lt;Start Address&gt;</strong> is the start address of the MemoryMap (<code>uefiplat.cfg</code>).
  </span>
  <span className="block">
    <strong>&lt;CPU Vector Base Address&gt;</strong> is the base address of CPU vectors in the MemoryMap (<code>uefiplat.cfg</code>).
  </span>
  <span className="block">
    <strong>&lt;UEFI Stack base/Size&gt;</strong> is the base/size address of the UEFI stack in the MemoryMap (<code>uefiplat.cfg</code>).
  </span>
  <span className="block">
    <strong>&lt;Display Color Depth&gt;</strong> is the value of your display's color depth. It can be found in the specifications of your phone, for example at <a href="https://www.devicespecifications.com/" className="underline text-blue-500" target="_blank">www.devicespecifications.com</a>.
  </span>
  <span className="block">
    <strong>&lt;Free DDR Region Start Address&gt;</strong> is the end address of the last DDR memory region. It is calculated as <code>&lt;Base Addr&gt; + &lt;Size Addr&gt; = &lt;End Addr&gt;</code>.
  </span>
  <span className="block">
    <strong>&lt;Setup Con Column&gt;</strong> / <strong>&lt;Con Column&gt;</strong> is the value of <code>&lt;Display Width&gt; / 8</code>.
  </span>
  <span className="block">
    <strong>&lt;Setup Con Row&gt;</strong> / <strong>&lt;Con Row&gt;</strong> is the value of <code>&lt;Display Height&gt; / 19</code>.
  </span>
</p>
      </div>
    </div>
  </CardContent>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <GitBranch className="h-5 w-5" />
      Step 3.1.2: Creating .dsc File
    </CardTitle>
    <CardDescription>
      This file declares information about what is provided in the package. An EDKII package is a collection of like content.
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-6">
    <div className="space-y-4">
      <div className="bg-muted/50 p-4 rounded-lg">
        <p className="text-sm">
  After we created the <code>.dsc</code> file, we will now continue with the <code>.dec</code> file.<br />
  Create a file called <code>&lt;Device Codename&gt;.dec</code> in <code>Mu-Silicium/Platforms/&lt;Device Vendor&gt;/&lt;Device Codename&gt;/</code>.<br />
  This file should be left empty.
</p>
      </div>
    </div>
  </CardContent>
<CardHeader>
    <CardTitle className="flex items-center gap-2">
      <GitBranch className="h-5 w-5" />
      Step 3.1.3: Creating .fdf File
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-6">
    <div className="space-y-4">
      <div className="bg-muted/50 p-4 rounded-lg">
        <p className="text-sm text mb-4">
  Once the <code>.dec</code> file is complete, we can move on to the <code>.fdf</code> file.<br />
  Create a file called <code>&lt;Device Codename&gt;.fdf</code> in <code>Mu-Silicium/Platforms/&lt;Device Vendor&gt;/&lt;Device Codename&gt;/</code>.<br />
  The <code>.fdf</code> file contains specific stuff about your device. Here is a template of how it should look:
</p>
<div className="bg-background p-3 rounded border font-mono text-sm mb-4">
  <p><code>{'## @file'}</code></p>
  <p><code>{'#'}</code></p>
  <p><code>{'#  Copyright (c) 2018, Linaro Limited. All rights reserved.'}</code></p>
  <p><code>{'#'}</code></p>
  <p><code>{'#  SPDX-License-Identifier: BSD-2-Clause-Patent'}</code></p>
  <p><code>{'#'}</code></p>
  <p><code>{'##'}</code></p>
  <p><code>{'[FD.&lt;Device Codename&gt;_UEFI]'}</code></p>
  <p><code>{'BaseAddress   = $(FD_BASE)|gArmTokenSpaceGuid.PcdFdBaseAddress'}</code></p>
  <p><code>{'Size          = $(FD_SIZE)|gArmTokenSpaceGuid.PcdFdSize'}</code></p>
  <p><code>{'ErasePolarity = 1'}</code></p>
  <p><code>{'BlockSize     = 0x1000'}</code></p>
  <p><code>{'NumBlocks     = $(FD_BLOCKS)'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'0x00000000|$(FD_SIZE)'}</code></p>
  <p><code>{'gArmTokenSpaceGuid.PcdFvBaseAddress|gArmTokenSpaceGuid.PcdFvSize'}</code></p>
  <p><code>{'FV = FVMAIN_COMPACT'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'[FV.FvMain]'}</code></p>
  <p><code>{'FvNameGuid         = 631008B0-B2D1-410A-8B49-2C5C4D8ECC7E'}</code></p>
  <p><code>{'BlockSize          = 0x1000'}</code></p>
  <p><code>{'NumBlocks          = 0'}</code></p>
  <p><code>{'FvAlignment        = 8'}</code></p>
  <p><code>{'ERASE_POLARITY     = 1'}</code></p>
  <p><code>{'MEMORY_MAPPED      = TRUE'}</code></p>
  <p><code>{'STICKY_WRITE       = TRUE'}</code></p>
  <p><code>{'LOCK_CAP           = TRUE'}</code></p>
  <p><code>{'LOCK_STATUS        = TRUE'}</code></p>
  <p><code>{'WRITE_DISABLED_CAP = TRUE'}</code></p>
  <p><code>{'WRITE_ENABLED_CAP  = TRUE'}</code></p>
  <p><code>{'WRITE_STATUS       = TRUE'}</code></p>
  <p><code>{'WRITE_LOCK_CAP     = TRUE'}</code></p>
  <p><code>{'WRITE_LOCK_STATUS  = TRUE'}</code></p>
  <p><code>{'READ_DISABLED_CAP  = TRUE'}</code></p>
  <p><code>{'READ_ENABLED_CAP   = TRUE'}</code></p>
  <p><code>{'READ_STATUS        = TRUE'}</code></p>
  <p><code>{'READ_LOCK_CAP      = TRUE'}</code></p>
  <p><code>{'READ_LOCK_STATUS   = TRUE'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  !include Include/APRIORI.inc'}</code></p>
  <p><code>{'  !include Include/DXE.inc'}</code></p>
  <p><code>{'  !include Include/RAW.inc'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  INF MdeModulePkg/Universal/SmbiosDxe/SmbiosDxe.inf'}</code></p>
  <p><code>{'  INF QcomPkg/Drivers/SmBiosTableDxe/SmBiosTableDxe.inf'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  INF MdeModulePkg/Universal/Acpi/AcpiTableDxe/AcpiTableDxe.inf'}</code></p>
  <p><code>{'  INF MdeModulePkg/Universal/Acpi/AcpiPlatformDxe/AcpiPlatformDxe.inf'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  !include Include/ACPI.inc'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  !include QcomPkg/Extra.fdf.inc'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'[FV.FVMAIN_COMPACT]'}</code></p>
  <p><code>{'FvAlignment        = 8'}</code></p>
  <p><code>{'ERASE_POLARITY     = 1'}</code></p>
  <p><code>{'MEMORY_MAPPED      = TRUE'}</code></p>
  <p><code>{'STICKY_WRITE       = TRUE'}</code></p>
  <p><code>{'LOCK_CAP           = TRUE'}</code></p>
  <p><code>{'LOCK_STATUS        = TRUE'}</code></p>
  <p><code>{'WRITE_DISABLED_CAP = TRUE'}</code></p>
  <p><code>{'WRITE_ENABLED_CAP  = TRUE'}</code></p>
  <p><code>{'WRITE_STATUS       = TRUE'}</code></p>
  <p><code>{'WRITE_LOCK_CAP     = TRUE'}</code></p>
  <p><code>{'WRITE_LOCK_STATUS  = TRUE'}</code></p>
  <p><code>{'READ_DISABLED_CAP  = TRUE'}</code></p>
  <p><code>{'READ_ENABLED_CAP   = TRUE'}</code></p>
  <p><code>{'READ_STATUS        = TRUE'}</code></p>
  <p><code>{'READ_LOCK_CAP      = TRUE'}</code></p>
  <p><code>{'READ_LOCK_STATUS   = TRUE'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  INF SiliciumPkg/PrePi/PrePi.inf'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  FILE FREEFORM = dde58710-41cd-4306-dbfb-3fa90bb1d2dd {'}</code></p>
  <p><code>{'    SECTION UI = "uefiplat.cfg"'}</code></p>
  <p><code>{'    SECTION RAW = Binaries/&lt;Device Codename&gt;/RawFiles/uefiplat.cfg'}</code></p>
  <p><code>{'  }'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  FILE FV_IMAGE = 9E21FD93-9C72-4c15-8C4B-E77F1DB2D792 {'}</code></p>
  <p><code>{'    SECTION GUIDED EE4E5898-3914-4259-9D6E-DC7BD79403CF PROCESSING_REQUIRED = TRUE {'}</code></p>
  <p><code>{'      SECTION FV_IMAGE = FVMAIN'}</code></p>
  <p><code>{'    }'}</code></p>
  <p><code>{'  }'}</code></p>
  <p><code>{''}</code></p>
  <p><code>{'  !include SiliciumPkg/Common.fdf.inc'}</code></p>
</div>
</div>
</div>
</CardContent>
<CardHeader>
    <CardTitle className="flex items-center gap-2">
      <GitBranch className="h-5 w-5" />
      Step 3.2: Creating .fdf.inc Files
    </CardTitle>
    <CardDescription>
      Now we create some files for the .fdf File.
    </CardDescription>
    <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <GitBranch className="h-5 w-5" />
      Step 3.2.1: Creating ACPI.inc
    </CardTitle>
    <CardDescription>
      This file defines what ACPI tables need to be added to the UEFI image you will build.
    </CardDescription>
  </CardHeader>
  </CardHeader>

  <CardContent className="space-y-6">
    <div className="space-y-4">
      <div className="bg-muted/50 p-4 rounded-lg">
       <p className="text-sm">
  For now, leave it empty.<br />
  Once your UEFI is working stably, you can follow the ACPI guide.
</p>
      </div>
    </div>
    <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <GitBranch className="h-5 w-5" />
      Step 3.2.2: Creating APRIORI.inc
    </CardTitle>
    <CardDescription>
      This file is simply a list of FV (Firmware Volume) filenames that the DXE dispatcher will always load—ignoring any dependency rules.
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-6">
    <div className="space-y-4">
      <div className="bg-muted/50 p-4 rounded-lg">
     <p className="text-sm text-muted-foreground mb-4">
  We continue with <code className="bg-muted px-1 rounded text-sm font-mono">APRIORI.inc</code>.<br />
  Create <code className="bg-muted px-1 rounded text-sm font-mono">APRIORI.inc</code> in <code className="bg-muted px-1 rounded text-sm font-mono">Mu-Silicium/Platforms/&lt;Device Vendor&gt;/&lt;Device Codename&gt;Pkg/Include/</code>.<br />
  Now we need the order of the binaries in <code className="bg-muted px-1 rounded text-sm font-mono">APRIORI.inc</code>. Use <code className="bg-muted px-1 rounded text-sm font-mono">UEFITool</code> to get the order.
</p>
<img src="./APRIORI1.png" alt="Apriori Step 1" width={900} />
<img src="./APRIORI2.png" alt="Apriori Step 2" width={900} />
<p className="text-sm text-muted-foreground mb-4">
  Next we place all the binaries in <code className="bg-muted px-1 rounded text-sm font-mono">APRIORI.inc</code> like this:
</p>
<div className="bg-background p-3 rounded border font-mono text-sm mb-4">
  <p><code>{'INF <Path to .inf File>'}</code></p>
</div>
<p className="text-sm text-muted-foreground mb-4">
  Next we place all the binaries in <code className="bg-muted px-1 rounded text-sm font-mono">APRIORI.inc</code> like this:
</p>

<div className="bg-muted/50 p-4 rounded-lg font-mono text-sm space-y-1">
  <p>INF MdeModulePkg/Universal/PCD/Dxe/Pcd.inf</p>
  <p>INF ArmPkg/Drivers/ArmPsciMpServicesDxe/ArmPsciMpServicesDxe.inf</p>
  <p>INF QcomPkg/Drivers/DynamicRAMDxe/DynamicRAMDxe.inf</p>
  <p>INF QcomPkg/Drivers/ClockSpeedUpDxe/ClockSpeedUpDxe.inf</p>
  <p>INF QcomPkg/Drivers/SimpleFbDxe/SimpleFbDxe.inf</p>
</div>

<p className="text-sm text-muted-foreground mt-4">
  <strong>Pcd</strong> should be placed under <code className="bg-muted px-1 rounded text-sm font-mono">DxeMain</code>.<br />
  <strong>ArmPsciMpServicesDxe</strong> should be under <code className="bg-muted px-1 rounded text-sm font-mono">TimerDxe</code>.<br />
  <strong>DynamicRAMDxe</strong> should be under <code className="bg-muted px-1 rounded text-sm font-mono">SmemDxe</code>.<br />
  <strong>ClockSpeedUpDxe</strong> should be under <code className="bg-muted px-1 rounded text-sm font-mono">ClockDxe</code>.<br />
  <strong>SimpleFbDxe</strong> doesn't replace <code className="bg-muted px-1 rounded text-sm font-mono">DisplayDxe</code>; make an <code className="bg-muted px-1 rounded text-sm font-mono">if</code> case for it — check other devices for reference.
</p>

<p className="text-sm text-muted-foreground mt-2">
  ⚠️ Do not add <code className="bg-muted px-1 rounded text-sm font-mono">FvSimpleFileSystemDxe</code>.
</p>

<p className="text-sm text-muted-foreground">
  Review other devices’ <code className="bg-muted px-1 rounded text-sm font-mono">APRIORI.inc</code> files to see what gets replaced with Mu drivers — and what doesn't.
</p>
      </div>
    </div>
  </CardContent>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <GitBranch className="h-5 w-5" />
      Step 3.2.3: Creating DXE.inc File
    </CardTitle>
    <CardDescription>
      DXE.inc is a text file used during the UEFI firmware build. It contains a list of all the DXE drivers and programs that should be included in the DXE phase of the firmware.
    </CardDescription>
    </CardHeader>
  <CardContent className="space-y-6">
    <div className="space-y-4">
      <div className="bg-muted/50 p-4 rounded-lg">
        <p className="text-sm text-muted-foreground mb-4">
  After that we can now move on to <code className="bg-muted px-1 rounded text-sm font-mono">DXE.inc</code>. Create <code className="bg-muted px-1 rounded text-sm font-mono">DXE.inc</code> in <code className="bg-muted px-1 rounded text-sm font-mono">Mu-Silicium/Platforms/&lt;Device Vendor&gt;/&lt;Device Codename&gt;Pkg/Include/</code>.<br />
  Now again we need the Order. To get the order of <code className="bg-muted px-1 rounded text-sm font-mono">DXE.inc</code>, open <code className="bg-muted px-1 rounded text-sm font-mono">xbl</code> or <code className="bg-muted px-1 rounded text-sm font-mono">uefi</code> in <code className="bg-muted px-1 rounded text-sm font-mono">UEFITool</code> and expand the FV(s), then you see the Order.
</p>
<img src="./DXE.png" alt="DXE" width={900} />

<p className="text-sm text-muted-foreground mb-4">
  Again we place all the Binaries like this:
</p>

<div className="bg-background p-3 rounded border font-mono text-sm mb-4">
  <p><code>{'INF <Path to .inf>'}</code></p>
</div>

<p className="text-sm text-muted-foreground mb-4">
  Also here again you need to add some extra Stuff:
</p>

<div className="bg-background p-3 rounded border font-mono text-sm mb-4">
  <p><code>{'INF ArmPkg/Drivers/ArmPsciMpServicesDxe/ArmPsciMpServicesDxe.inf'}</code></p>
  <p><code>{'INF MdeModulePkg/Universal/PCD/Dxe/Pcd.inf'}</code></p>
  <p><code>{'INF QcomPkg/Drivers/DynamicRAMDxe/DynamicRAMDxe.inf'}</code></p>
  <p><code>{'INF QcomPkg/Drivers/ClockSpeedUpDxe/ClockSpeedUpDxe.inf'}</code></p>
  <p><code>{'INF QcomPkg/Drivers/SimpleFbDxe/SimpleFbDxe.inf'}</code></p>
  <p><code>{'INF MdeModulePkg/Bus/Usb/UsbMouseAbsolutePointerDxe/UsbMouseAbsolutePointerDxe.inf'}</code></p>
</div>

<p className="text-sm text-muted-foreground mb-4">
  ArmPsciMpServicesDxe should be under TimerDxe.<br />
  Pcd should be under DxeMain.<br />
  DynamicRAMDxe should be under SmemDxe.<br />
  ClockSpeedUpDxe should be under ClockDxe.<br />
  SimpleFbDxe doesn't Replace DisplayDxe. Make an If case for it. Check other Devices for the if case.<br />
  UsbMouseAbsolutePointerDxe should be under UsbKbDxe.
</p>

<p className="text-sm text-muted-foreground mb-4">
  Remove any EFI Applications from XBL in DXE.inc.<br />
  Also again, Make sure that you don't add FvSimpleFileSystemDxe.
</p>

<p className="text-sm text-muted-foreground">
  Check other Devices DXE.inc File to get an Idea, What to replace with the Mu Driver and what not.
</p>
      </div>
    </div>
  </CardContent>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <GitBranch className="h-5 w-5" />
      Step 3.2.4: Creating RAW.inc File
    </CardTitle>
    <CardDescription>
      RAW.inc is a file that tells the UEFI build system to include certain raw binary blobs (like configs or images) directly into the firmware without changing them. Each file is added with a unique ID and kept exactly as it is.
    </CardDescription>
    </CardHeader>
   </CardContent>
  </Card>
        {/* Step 4: Testing and Validation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              Step 4: Testing and Validation
            </CardTitle>
            <CardDescription>
              Testing your port and validating functionality
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Basic Functionality Tests</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Boot to desktop environment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Display output and touch input
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Storage device detection
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Network connectivity
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Advanced Features</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Audio playback and recording
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Camera functionality
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Sensor data collection
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    GPU acceleration
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources and Links */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              Resources and Documentation
            </CardTitle>
            <CardDescription>
              Helpful resources for Snapdragon device porting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold">Official Documentation</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-primary hover:underline flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Qualcomm Developer Network
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Linux Kernel Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Device Tree Specification
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Community Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-primary hover:underline flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Project Silicium GitHub
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      XDA Developers Forum
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Telegram Support Group
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Need help? Join our community on{" "}
            <a href="#" className="text-primary hover:underline">Telegram</a> or{" "}
            <a href="#" className="text-primary hover:underline">Discord</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SnapdragonPortingGuide;
