(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{265:function(e,t,r){"use strict";r.r(t);var a=r(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"getting-started-with-azureml-notebook-vms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-azureml-notebook-vms"}},[e._v("#")]),e._v(" Getting Started With AzureML Notebook VMs")]),e._v(" "),r("ContentMeta"),e._v(" "),r("p",[e._v("(Notice this post is out of date please check out "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/machine-learning/concept-compute-instance/?WT.mc_id=blog-medium-abornst",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Machine Learning Compute Instance’s"),r("OutboundLink")],1),e._v(" a new post describing how to get started is coming soon!)")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/freeze/max/60/1*2pYrggp8mO47vVpGA2Dfdg.gif?q=20",alt:"img"}})]),e._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/6368/1*2pYrggp8mO47vVpGA2Dfdg.gif",alt:"img"}})]),e._v(" "),r("p",[e._v("TLDR; "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/machine-learning/service/overview-what-is-azure-ml?WT.mc_id=blog-medium-abornst",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Machine Learning"),r("OutboundLink")],1),e._v(" (AML), a cloud-based environment you can use to train, deploy, automate, manage, and track ML models. In the following tutorial we will walk through how to set up an Azure Notebook VM.")]),e._v(" "),r("h2",{attrs:{id:"what-are-the-benefits-of-azureml-notebook-vms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-benefits-of-azureml-notebook-vms"}},[e._v("#")]),e._v(" What are the benefits of AzureML Notebook VMs?")]),e._v(" "),r("p",[e._v("Azure ML Notebook VMs are cloud-based environments preloaded with everything you need to get started with ML and data science in Azure.")]),e._v(" "),r("p",[e._v("AML Notebook VMs are secure and easy-to-use, fully customizable and directly integrated into Azure Machine Learning Service, providing a code-first experience for data scientists to build and deploy models using AzureML")]),e._v(" "),r("p",[e._v("Azure ML Notebook VM Features:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Secure")]),e._v(" — Azure Active Directory login integrated with the AML Workspace, provides access to files stored in the workspace, implicitly configured for the workspace.")]),e._v(" "),r("li",[r("strong",[e._v("Scalable")]),e._v("— created with a few clicks in the AML workspace portal, managed from within the AML workspace portal. Since notebooks are managed by the AML Service compute can be scaled as needed.")]),e._v(" "),r("li",[r("strong",[e._v("Pre-Configured")]),e._v("— up-to-date AML Python Environment, GPU drivers, Pytorch, Tensorflow, Scikit learn, R etc.")]),e._v(" "),r("li",[r("strong",[e._v("Customizable")]),e._v(" — ssh to the machine, install your own tools (or drivers), changes persist when machines are shut down or restarted.")])]),e._v(" "),r("h2",{attrs:{id:"step-1-login-to-azure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-1-login-to-azure"}},[e._v("#")]),e._v(" Step 1: Login to Azure")]),e._v(" "),r("p",[e._v("If you don’t have an Azure Subscription you can get a free account using the link below.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://azure.microsoft.com/en-us/free/?WT.mc_id=blog-medium-abornst",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create your Azure free account today"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"step-2-create-azure-machine-learning-workspace"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-2-create-azure-machine-learning-workspace"}},[e._v("#")]),e._v(" Step 2: Create Azure Machine Learning Workspace")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/freeze/max/60/0*N09HG5K133NUC45H.gif?q=20",alt:"img"}})]),e._v(" "),r("p",[e._v("Follow the instructions in the gif above to create a new azure machine learning service instance. More information can be found below.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/machine-learning/service/tutorial-1st-experiment-sdk-setup?WT.mc_id=blog-medium-abornst",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tutorial: Create your first ML experiment - Azure Machine Learning"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"step-3-navigate-to-azure-ml-compute"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-3-navigate-to-azure-ml-compute"}},[e._v("#")]),e._v(" Step 3: Navigate to Azure ML Compute")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/60/1*r9E_9IOr95ZxpA_2nOzC_g.png?q=20",alt:"img"}})]),e._v(" "),r("h2",{attrs:{id:"step-4-click-new-compute"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-4-click-new-compute"}},[e._v("#")]),e._v(" Step 4: Click New Compute")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/60/1*GJom1HUXnuK803DjzrGRtw.png?q=20",alt:"img"}})]),e._v(" "),r("h2",{attrs:{id:"step-5-choose-the-vm-size-and-deploy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-5-choose-the-vm-size-and-deploy"}},[e._v("#")]),e._v(" Step 5: Choose the VM Size and Deploy")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/60/1*pzTToNLGuG9WRii4Q60X4g.png?q=20",alt:"img"}})]),e._v(" "),r("p",[e._v("A list of VM Sizes and pricing can be found in the documentation below. The standard series is recommended for most projects and the N series are recommended for projects requiring GPU.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://azure.microsoft.com/en-us/pricing/details/virtual-machines/series/?WT.mc_id=blog-medium-abornst",target:"_blank",rel:"noopener noreferrer"}},[e._v("Virtual Machine series"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("When you are done click create it should take about 5–10 mins to set up the new VM depending on the specified configuration.")]),e._v(" "),r("h2",{attrs:{id:"step-6-jupyter-jupyterlab-or-open-r-studio-and-get-started-coding"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-6-jupyter-jupyterlab-or-open-r-studio-and-get-started-coding"}},[e._v("#")]),e._v(" Step 6: Jupyter, JupyterLab or Open R Studio and Get Started Coding")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/60/1*5FXOhPFpHBdHhqCh5SbvGw.png?q=20",alt:"img"}})]),e._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/5932/1*5FXOhPFpHBdHhqCh5SbvGw.png",alt:"img"}})]),e._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/60/1*W2t49hUltJddA_Mpyop9Tg.png?q=20",alt:"img"}})]),e._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/5344/1*W2t49hUltJddA_Mpyop9Tg.png",alt:"img"}})]),e._v(" "),r("h2",{attrs:{id:"bonus-best-practice-shutdown-vm-when-not-in-use-delete-vm-when-using-standard-dependencies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bonus-best-practice-shutdown-vm-when-not-in-use-delete-vm-when-using-standard-dependencies"}},[e._v("#")]),e._v(" Bonus Best Practice: Shutdown VM when not in use delete VM when using standard dependencies.")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/60/1*u-ap5ZImFnzj2kmpg3w9GA.png?q=20",alt:"img"}})]),e._v(" "),r("p",[e._v("Since all notebooks are persisted in the notebooks section of the Azure ML Service unlike a DSVM your work can be recovered and shared across multiple notebook VMs. So it is seamless to start with a standard VM for basic data processing and later switch to a N Series VM if GPU Compute is needed.")]),e._v(" "),r("h2",{attrs:{id:"next-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),r("p",[e._v("Now that you have set up your first Notebook VM check out my previous post on 9 Advanced Tips for Production machine learning.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://medium.com/microsoftazure/9-advanced-tips-for-production-machine-learning-6bbdebf49a6f",target:"_blank",rel:"noopener noreferrer"}},[e._v("9 Advanced Tips for Production Machine Learning"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Also check out setting up Remote Debugging on your new Azure Notebook VM with "),r("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("[danielsc/azureml-debug-training](https://github.com/danielsc/azureml-debug-training/blob/master/Setting up VSCode Remote on an AzureML Notebook VM.md)")]),e._v(" "),r("h2",{attrs:{id:"about-the-author"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#about-the-author"}},[e._v("#")]),e._v(" About the Author")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.linkedin.com/in/aaron-ari-bornstein-22aa7a77/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Aaron (Ari) Bornstein"),r("OutboundLink")],1),e._v(" is an avid AI enthusiast with a passion for history, engaging with new technologies and computational medicine. As an Open Source Engineer at Microsoft’s Cloud Developer Advocacy team, he collaborates with Israeli Hi-Tech Community, to solve real world problems with game changing technologies that are then documented, open sourced, and shared with the rest of the world.")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);