产品需求文档 (PRD) - e-Tysan System

项目名称: e-Tysan Digitalization System
文档版本: 1.0
日期: 2026-01-29
所属组织: 泰昇集团 (Tysan Group)

1. 项目背景与目标

本项目旨在为泰昇集团开发一套名为 e-Tysan 的数字化管理系统。该系统通过模块化（Modulus）设计，将工程项目、采购、安全、质量、环保、工料测量（QS）、人力资源及机械设备管理等核心业务流程从传统的纸质/线下模式转化为线上数字化平台。

核心目标：

建立私有化部署的独立 Web 平台。

消除纸质系统，增强实时监控。

通过严格的审计跟踪（Audit Trails）保持合规性。

实现各部门间的数据互通与流程自动化。

2. 系统架构与基础设施

2.1 硬件与部署 (Modulus A 基础)

部署方式: 本地私有化部署 (On-premises) 或混合云方案。

服务器资产: 包括 Lenovo ThinkSystem SR650, IBM X3200 等，用于 Web Server, File Server, SAN Storage。

网络架构: Intranet (内网) + Web Access。

主要组件:

Web Server (Linux)

File Server (Windows Server 2012/2019/2022)

Database & App Server

2.2 用户角色与权限

系统需支持基于角色的访问控制 (RBAC)，典型角色包括：

Requester (申请人): 发起流程。

Reviewer (审核人): 检查内容。

Approver (批准人): 拥有最终决定权。

Executive (执行人): 执行具体任务。

Admin (管理员): 管理工作流规则、用户权限。

3. 功能模块详情 (Functional Requirements)

3.1 Modulus A: 核心门户 (Central E-Portal)

功能描述: 作为系统的统一入口，连接所有子模块。

统一仪表盘 (Dashboard): 展示最新公司通告 (Memo)、代办事项 (To-Do List)、各模块关键指标。

导航中心: 提供跳转至各个 Modulus (B-K) 的快捷入口。

外部链接集成: 集成 HKO-Weather, EPD 等常用外部链接。

通知中心: 汇集来自所有模块的审批、提醒通知。

3.2 Modulus B: 邮件与通讯系统 (Emailing System)

功能描述: 安全的企业邮件及通讯管理。

邮件重定向: 支持重定向至 Webmail/Gmail/其他系统。

安全合规:

支持 DMARC, DKIM & SPF。

双重认证 (2FA): SMS, Email 或 Authenticator。

密码策略: 强制定期更改、复杂度要求、锁定机制。

功能特性: 自动回复、文件以链接形式分享、在线预览 (Word/Excel/PDF)。

3.3 Modulus C & D: 文档管理系统 (Project & Safety DMS)

功能描述: 针对工程 (Project) 和安全 (Safety) 的专用文档管理。

文件数字化:

Project DMS: 标书、往来信函 (Site Letter/Memo)、日报表、图纸、Site Meeting 记录、验工计价单等。

Safety DMS: 事故报告、安全计划书、TCP 记录等。

核心功能:

OCR 技术: 将旧文档转换为可全文搜索的资产。

版本控制与权限: 针对不同阶段 (Tender/Design/Construction) 动态调整权限。

安全传输: 端到端加密、下载文件加水印、外部协作方 (Consultants/Sub-cons) 的受限访问。

审批流: 支持电子签名 (Digital Signatures) 和并行/串行审批。

3.4 Modulus E: 安全管理模块 (Safety Modulus - Active)

功能描述: 现场安全操作的数字化执行端（区别于 D 模块的文档归档）。

移动端 App: 支持 iOS/Android，具备离线功能。

电子巡查 (Inspection & Patrol): 自定义检查表、拍照取证、自动追踪整改。

事故报告: 两阶段在线报告（初步 & 完整），包含根本原因分析 (RCA)。

人员管理 (Worker Registry):

OCR 扫描 HKID 和绿卡。

智能门禁集成：若证件过期或安全分过低，自动拒绝入场。

电子培训: 集成 CWRA 卡考勤，在线测验。

无代码表单构建器: 允许安全经理拖拽生成临时表单。

3.5 Modulus F & G: IMS 质量与环保模块

功能描述: 综合管理体系 (IMS) 的数字化。

Modulus F (Quality):

客户投诉记录与电子签名。

不符合项 (NCR) 触发纠正措施请求 (CAR) 流程。

自动生成月度质量总结报表。

Modulus G (Environmental):

月度环境巡查清单 (Checklist) 及照片上传。

整改前后照片对比。

环境许可证 (Permit/License) 申请流程与过期提醒。

3.6 Modulus H: 工料测量模块 (QS Modulus)

功能描述: 处理财务、合同、成本相关的核心业务。

收支管理:

收入 (Cash Inflow): 付款申请 (Payment Application)、付款证书。

支出 (Cash Outflow): 水电费、分包商付款、材料款、测试费、杂费。

成本审查 (Cost Review): 生成初始及更新的成本审查报告，对接财务部门。

合同管理: 授标通知、保函管理、分包合同管理、最终账目 (Final Account)。

技术要求:

OCR: 识别发票和扫描件（准确率 >98%）。

零信任架构: 远程操作安全保障。

自动化归档: 发票与送货单 (Delivery Note) 自动匹配与归档。

3.7 Modulus I: 采购模块 (Procurement Modulus)

功能描述: 从请购到订单的全流程管理。

年度费率管理 (Annual Rate): 运输、常用建材、燃油等的年度协议价管理。

采购流程 (Workflow):

请购 (Requisition): 地盘提交申请 (Material Requisition Form)。

询价 (Quotation): 超过特定金额需进行报价分析 (Quotation Analysis Report)。

审批 (Approval): 根据金额分级审批 (PM -> Director -> President -> Vice Chairman)。

订单 (PO): 生成采购单，确立供应商。

收货与发票: 地盘签收 (Delivery Note) -> 供应商发票 -> 采购部盖章 -> 转交 QS/财务。

供应商管理: 表现评估、资格预审。

3.8 Modulus J: 人力资源模块 (Human Resource Modulus)

功能描述: 总部与地盘员工的全生命周期管理。

档案中心: 员工个人资料、工作经历、资格证书 (Green Card, A12 等) 及其有效期提醒。

考勤与薪酬:

打卡记录 (Clock in/out)。

与 Payroll 系统集成，自动计算工时、津贴。

招聘与离职: 在线人员需求申请、入职/离职检查表。

培训: 培训记录追踪、教育津贴申请。

3.9 Modulus K: 机械设备模块 (Plant Modulus)

功能描述: 机械资产的全生命周期管理。

资产台账: 机械位置、状态、转移记录 (Transfer Note)。

维修与保养:

维修记录 (Job Sheet): 记录维修内容、人工时数、零件消耗。

巡查 (Inspection): 针对吊机 (Crawler Crane)、RCD、发电机等的日/周/月检清单 (Form 2, 3, 5 等)。

机械租赁 (Plant Hire Return):

计算内部/外部机械的租金。

记录起租/停租 (Off-hire) 日期、闲置时间。

物资处置: 废铁/废料处理申请及审批流程。

4. 非功能性需求 (Non-Functional Requirements)

安全性 (Security):

所有模块需通过单点登录 (SSO) 或统一身份认证。

数据传输加密 (TLS/SSL)。

定期进行网络安全风险评估和渗透测试。

可用性 (Availability):

系统需支持灾难恢复 (Disaster Recovery)，明确 RPO/RTO 指标。

支持离线模式 (特别是 Modulus E 和 K 的移动端功能)，联网后自动同步。

兼容性:

Web 端支持主流浏览器 (Chrome, Edge)。

移动端支持 iOS 和 Android。

数据保留:

所有审计日志和审批记录需满足法律和合同要求的保留期限。

5. 附录：关键工作流示例

采购: 申请 -> 询价 -> 报价分析 (>$100k) -> 审批 -> PO -> 收货 -> 发票匹配。

机械维修: 故障报告 -> 维修工单 -> 零件领用 -> 维修完成 -> 记录工时 -> 成本核算。

文档审批: 上传 -> 自动通知 Reviewer -> 在线批注 -> Approver 电子签名 -> 归档并分发。