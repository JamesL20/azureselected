(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{247:function(e,t,o){"use strict";o.r(t);var n=o(19),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"how-to-use-github-actions-to-deploy-a-virtual-machine"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-github-actions-to-deploy-a-virtual-machine"}},[e._v("#")]),e._v(" How to use GitHub Actions to deploy a virtual machine")]),e._v(" "),o("ContentMeta"),e._v(" "),o("p",[e._v("Hands up if you are used to deploy servers either by unpacking them from a box or using a graphical user interface (GUI)? Yip, that’s me and it's where I’ve built my career. However, over the last few years I’ve been getting more and more used to deploying servers and their supporting resources via code. Either using something like PowerShell or Azure CLI, or sometimes a combination of both.")]),e._v(" "),o("p",[e._v("I’ve also taught myself how to use tools such as Visual Studio Code, Git, GitHub or even Azure DevOps to get the task done.  It’s not been an easy journey but what it has been is fun and a challenge.")]),e._v(" "),o("p",[e._v("At the end of 2019 GitHub announced "),o("a",{attrs:{href:"https://github.blog/2019-11-14-powering-community-led-innovation-with-github-actions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Actions"),o("OutboundLink")],1),e._v(", a new way to automate deployment of code from GitHub repositories.  I’ve been watching with interest as my developer focused colleagues and friends dig into the new service and show examples of it being used and have decided to take a look at it myself and see what it can do for the IT Pro community, as I’m a firm believer that these types of tools can offer IT Pros great opportunities as well.")]),e._v(" "),o("h4",{attrs:{id:"github-actions-terminology"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#github-actions-terminology"}},[e._v("#")]),e._v(" "),o("strong",[e._v("GitHub Actions Terminology")])]),e._v(" "),o("p",[e._v("There is some new terminology that comes with GitHub Actions, so let’s define those before we dig in.")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Action")]),e._v(" – these define what we can do, we can either get them from the marketplace (free) or build our own")]),e._v(" "),o("li",[o("strong",[e._v("Workflow")]),e._v(" – A collection of Environment variables, Jobs and Steps that are completed when an event happens")]),e._v(" "),o("li",[o("strong",[e._v("Jobs")]),e._v(" – What the workflow will do")]),e._v(" "),o("li",[o("strong",[e._v("Steps")]),e._v(" - A task undertaken by a Job using an Action")]),e._v(" "),o("li",[o("strong",[e._v("Event")]),e._v(" – Something that happens and triggers a workflow, e.g a commit is pushed to a repository, an issue or pull request is issued")])]),e._v(" "),o("h4",{attrs:{id:"what-do-you-want-to-build"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-do-you-want-to-build"}},[e._v("#")]),e._v(" "),o("strong",[e._v("What do you want to build?")])]),e._v(" "),o("p",[e._v("Keeping it simple, I want my GitHub Action to build a virtual machine (VM) within Azure. Keeping it really simple I want it to build the VM and it’s associated supporting technology (disk, network interface, virtual network, storage account, etc) within the same resource group.  This isn’t exactly best practice but is an easy example to start with and one that is well known/documented.")]),e._v(" "),o("p",[e._v("I can use four blocks of Azure CLI code to build the VM within Azure.  The first block of code helps log into my Azure subscription using an Azure Service Principal and perform the necessary steps to create the VM.")]),e._v(" "),o("div",{staticClass:"language-markup extra-class"},[o("pre",{pre:!0,attrs:{class:"language-markup"}},[o("code",[e._v('#region Login\n# This logs into Azure with a Service Principal Account\n#\nWrite-Output "Logging in to Azure with a service principal..."\naz login `\n    --service-principal `\n    --username $servicePrincipal `\n    --password $servicePrincipalSecret `\n    --tenant $servicePrincipalTenantId\nWrite-Output "Done"\nWrite-Output ""\n#endregion\n')])])]),o("p",[e._v("The next section selects the correct subscription, just to be sure my resources go to the right place:")]),e._v(" "),o("div",{staticClass:"language-markup extra-class"},[o("pre",{pre:!0,attrs:{class:"language-markup"}},[o("code",[e._v('#region Subscription\n#This sets the subscription the resources will be created in\nWrite-Output "Setting default azure subscription..."\naz account set `\n    --subscription $azureSubscriptionName\nWrite-Output "Done"\nWrite-Output ""\n#endregion\n')])])]),o("p",[e._v("The third section creates the resource group for my VM to live in:")]),e._v(" "),o("div",{staticClass:"language-markup extra-class"},[o("pre",{pre:!0,attrs:{class:"language-markup"}},[o("code",[e._v('#region Create Resource Group\n# This creates the resource group used to house the VM\nWrite-Output "Creating resource group $resourceGroupName in region $resourceGroupNameRegion..."\naz group create `\n    --name $resourceGroupName `\n    --location $resourceGroupNameRegion\n    Write-Output "Done creating resource group"\n    Write-Output ""\n#endregion\n')])])]),o("p",[e._v("And the fourth section creates the VM within that resource group:")]),e._v(" "),o("div",{staticClass:"language-markup extra-class"},[o("pre",{pre:!0,attrs:{class:"language-markup"}},[o("code",[e._v('#region Create VM\n# Create a VM in the resource group\nWrite-Output "Creating VM..."\ntry {\n    az vm create  `\n        --resource-group $resourceGroupName `\n        --name $serverName `\n        --image win2016datacenter `\n        --admin-username $adminLogin `\n        --admin-password $adminPassword\n    }\ncatch {\n    Write-Output "VM already exists"\n    }\nWrite-Output "Done creating VM"\nWrite-Output ""\n#endregion\n')])])]),o("p",[e._v("The code isn’t complex and is a well-known example you can see in a lot of Documentation and tutorials. Within my script I’ve used various parameters to allow me to store the information securely or pass it in from my workflow file.  You can find my full PowerShell script "),o("a",{attrs:{href:"https://gist.github.com/weeyin83/81e7a7bf3caf3d0bce787db5d562b47e?WT.mc_id=blog-itops-salean",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h4",{attrs:{id:"how-do-i-instruct-the-action"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-instruct-the-action"}},[e._v("#")]),e._v(" "),o("strong",[e._v("How do I instruct the Action?")])]),e._v(" "),o("p",[e._v("To kick off the VM build we construct a Workflow file. This is in the form of YAML. You can call your workflow file anything you want as long as it ends with. yml or .yaml as the extension type. It also needs to be stored within a specific directory within your GitHub repository - "),o("strong",[e._v(".github/workflows")])]),e._v(" "),o("p",[e._v("Your workflow file is split up into several sections, let’s look at each of them individually:")]),e._v(" "),o("p",[o("strong",[e._v("Metadata")])]),e._v(" "),o("p",[e._v("We start off with some naming the workflow:")]),e._v(" "),o("div",{staticClass:"language-markup extra-class"},[o("pre",{pre:!0,attrs:{class:"language-markup"}},[o("code",[e._v("name: GitHub for IT Pro CI/CD Pipeline\n")])])]),o("p",[o("strong",[e._v("Environment variables:")])]),e._v(" "),o("div",{staticClass:"language-markup extra-class"},[o("pre",{pre:!0,attrs:{class:"language-markup"}},[o("code",[e._v("Env:\n\n  OUTPUT_PATH: $\n")])])]),o("p",[o("strong",[e._v("Triggers")])]),e._v(" "),o("p",[e._v("We then instruct how the action will be "),o("a",{attrs:{href:"https://help.github.com/en/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#on",target:"_blank",rel:"noopener noreferrer"}},[e._v("triggered"),o("OutboundLink")],1),e._v("; I have set my action to start whenever something is pushed to the repository:")]),e._v(" "),o("div",{staticClass:"language-markup extra-class"},[o("pre",{pre:!0,attrs:{class:"language-markup"}},[o("code",[e._v("on: [push]\n")])])]),o("p",[o("strong",[e._v("Jobs")])]),e._v(" "),o("p",[e._v("Now we start to declare the jobs that our workflow will do, we have to start by declaring what platform our Workflow will run on (Linux, MacOS or Windows).")]),e._v(" "),o("div",{staticClass:"language-markup extra-class"},[o("pre",{pre:!0,attrs:{class:"language-markup"}},[o("code",[e._v("jobs:\n\n# Deploy VM in Azure\n\n  DeployVM:\n\n    runs-on: windows-latest\n")])])]),o("p",[o("strong",[e._v("Steps")])]),e._v(" "),o("p",[e._v("Now we can start with the steps within the workflow. The first step I’ve instructed my workflow to do a checkout. This takes the files/code from my repository and puts it into "),o("strong",[e._v("$github.workspace")]),e._v(" for my workflow to access it.")]),e._v(" "),o("div",{staticClass:"language-markup extra-class"},[o("pre",{pre:!0,attrs:{class:"language-markup"}},[o("code",[e._v("steps:\n\n    # checkout code from repo\n\n    - name: checkout repo\n\n      uses: actions/checkout\n")])])]),o("p",[e._v("The next step we have is one where we tell the workflow to look for the PowerShell script that helps to build the VM:")]),e._v(" "),o("div",{staticClass:"language-markup extra-class"},[o("pre",{pre:!0,attrs:{class:"language-markup"}},[o("code",[e._v("    - name: look for ps1 file\n\n      run: |\n\n        ls '$\\IaC\\AzCLI'\n")])])]),o("p",[e._v("And the last step in our workflow is to deploy and provision the VM:")]),e._v(" "),o("div",{staticClass:"language-markup extra-class"},[o("pre",{pre:!0,attrs:{class:"language-markup"}},[o("code",[e._v(" - name: provision virtual machine in azure\n\n      env:\n\n        RESOURCE_GROUP: rg-githubitpro\n\n        RESOURCE_GROUP_REGION: southcentralus\n\n        SERVER_NAME: gihtubactions\n\n        ADMIN_LOGIN: sarah\n\n      run: >\n\n        powershell -command \"& '$\\IaC\\AzCLI\\vmcreation.ps1'\"\n\n        -servicePrincipal $\n\n        -servicePrincipalSecret $\n\n        -servicePrincipalTenantId $\n\n        -azureSubscriptionName $\n\n        -resourceGroupName %RESOURCE_GROUP%\n\n        -resourceGroupNameRegion %RESOURCE_GROUP_REGION%\n\n        -serverName %SERVER_NAME%\n\n        -adminLogin %ADMIN_LOGIN%\n\n        -adminPassword $\n")])])]),o("p",[e._v("Now there is a lot to that step so let’s break down what we are doing even further:")]),e._v(" "),o("div",{staticClass:"language-markup extra-class"},[o("pre",{pre:!0,attrs:{class:"language-markup"}},[o("code",[e._v("    - name: provision virtual machine in azure\n\n      env:\n\n        RESOURCE_GROUP: rg-githubitpro\n\n        RESOURCE_GROUP_REGION: southcentralus\n\n        SERVER_NAME: gihtubactions\n\n        ADMIN_LOGIN: sarah\n")])])]),o("p",[e._v("This first part is declaring some environment variables, here I am setting my Azure Resource Group name, the region I want the resource group to be deployed in, the name of my virtual machine (server) and the name of the admin login account that will be created for that VM.")]),e._v(" "),o("p",[e._v("The second stage of the step is telling my workflow to call my PowerShell script and pass in the following variables from the workflow and "),o("a",{attrs:{href:"https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Secrets store"),o("OutboundLink")],1),e._v(".  To allow GitHub Actions to deploy resources within my Azure Subscription I have created an Azure Service Principal. If you’ve never worked within them before I wrote an article covering how to create and work with them "),o("a",{attrs:{href:"https://techcommunity.microsoft.com/t5/itops-talk-blog/working-with-azure-service-principal-accounts/ba-p/1086961?WT.mc_id=blog-itopstalk-salean",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("div",{staticClass:"language-markup extra-class"},[o("pre",{pre:!0,attrs:{class:"language-markup"}},[o("code",[e._v("run: >\n\n        powershell -command \"& '$\\IaC\\AzCLI\\vmcreation.ps1'\"\n\n        -servicePrincipal $\n\n        -servicePrincipalSecret $\n\n        -servicePrincipalTenantId $\n\n        -azureSubscriptionName $\n\n        -resourceGroupName %RESOURCE_GROUP%\n\n        -resourceGroupNameRegion %RESOURCE_GROUP_REGION%\n\n        -serverName %SERVER_NAME%\n\n        -adminLogin %ADMIN_LOGIN%\n\n        -adminPassword $\n")])])]),o("p",[e._v("For a full copy of this workflow file, you can find it "),o("a",{attrs:{href:"https://gist.github.com/weeyin83/b63d320cc814dee9aebb599b847d0a49",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h4",{attrs:{id:"monitoring-the-github-action-running"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-the-github-action-running"}},[e._v("#")]),e._v(" "),o("strong",[e._v("Monitoring the GitHub Action running")])]),e._v(" "),o("p",[e._v("When the Action is running you can monitor its progress. When you navigate to your repository on the GitHub website you will see a tab called Actions, click into that will take you into the Workflow section. You can create new workflows, edit workflows and monitor the progress of the workflows running.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://gxcuf89792.i.lithium.com/t5/image/serverpage/image-id/163886i433300750608D8F9/image-size/large?v=1.0&px=999",alt:"undefined"}}),o("em",[e._v("GitHub Actions Tab")])]),e._v(" "),o("p",[o("img",{attrs:{src:"https://gxcuf89792.i.lithium.com/t5/image/serverpage/image-id/163889iD61736851B0DA262/image-size/large?v=1.0&px=999",alt:"undefined"}}),o("em",[e._v("Monitoring GitHub Actions")])]),e._v(" "),o("p",[e._v("And once the workflow has completed you can check in your Azure subscription and hopefully see the resource created:")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://gxcuf89792.i.lithium.com/t5/image/serverpage/image-id/163887i4528F2147C235951/image-size/large?v=1.0&px=999",alt:"undefined"}}),o("em",[e._v("Azure Resources")])]),e._v(" "),o("h4",{attrs:{id:"things-to-think-about"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#things-to-think-about"}},[e._v("#")]),e._v(" "),o("strong",[e._v("Things to think about")])]),e._v(" "),o("p",[e._v("My example workflow is a very basic one and the resource that I am deploying is a very basic one, however for me it was a great starting point to learn GitHub Actions. I’ve seen my colleagues use it for much more complex deployments and workflows, for example Aaron Powell is using it to "),o("a",{attrs:{href:"https://www.aaron-powell.com/posts/2019-12-17-implementing-github-actions-for-my-blog/",target:"_blank",rel:"noopener noreferrer"}},[e._v("deploy his blog"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://github.com/weeyin83/vm-actions",target:"_blank",rel:"noopener noreferrer"}},[e._v("repository"),o("OutboundLink")],1),e._v(" I created to test out this deployment is a public one and the output of my workflow is available for anyone logged in or not to GitHub to view, which displays certain information that could be considered as sensitive such as my Azure Subscription ID and more importantly the Public IP address of my VM, which gives people with bad intentions an easy attack surface.  So, if you are testing GitHub Actions please be aware of this and vigilant on what you deploy in Azure and how it is secured.")]),e._v(" "),o("p",[e._v("I've recorded a video of me walking through the code and each step, this video can be found here:\n"),o("a",{attrs:{href:"https://youtu.be/0kDr9OlAzlM",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://youtu.be/0kDr9OlAzlM"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("I’d love to hear how other IT Pros are using GitHub Actions to deploy infrastructure, so please do reach out and share your stories!")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);