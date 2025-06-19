# Test info

- Name: Agents Module Tests >> agent pagination
- Location: C:\Users\derej\Desktop\Connect\tests\bankPortal\Maker\pagination.spec.js:9:3

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#headlessui-listbox-button-\\:r99\\:')

    at pagination.agentPaginationbutton (C:\Users\derej\Desktop\Connect\pages\bankPortal\maker\pagination.page.js:14:31)
    at C:\Users\derej\Desktop\Connect\tests\bankPortal\Maker\pagination.spec.js:12:25
```

# Page snapshot

```yaml
- main:
  - img "logo"
  - img "cbenewmaker"
  - heading "cbenewmaker cbenewbank" [level=6]
  - paragraph: cbenewmaker@gmail.com
  - button "agents":
    - img
    - heading "agents" [level=6]
  - img
  - searchbox
  - button:
    - img
  - link "Add Agent":
    - /url: /agents/create
    - button "Add Agent"
  - table:
    - rowgroup:
      - row "Agent ID agent Name email phone Number country city Joined Date Status Control Actions":
        - columnheader "Agent ID"
        - columnheader "agent Name"
        - columnheader "email"
        - columnheader "phone Number"
        - columnheader "country"
        - columnheader "city"
        - columnheader "Joined Date"
        - columnheader "Status"
        - columnheader "Control"
        - columnheader "Actions"
    - rowgroup:
      - row "364185 ABC Agent abcagent@example.com +25191122 Ethiopia Addis Ababa Wed, Jun 18 2025 (4:26 PM) Enabled Currently enabled - click to disable":
        - cell "364185":
          - paragraph: "364185"
        - cell "ABC Agent":
          - paragraph: ABC Agent
        - cell "abcagent@example.com":
          - paragraph: abcagent@example.com
        - cell "+25191122":
          - paragraph: "+25191122"
        - cell "Ethiopia":
          - paragraph: Ethiopia
        - cell "Addis Ababa":
          - paragraph: Addis Ababa
        - cell "Wed, Jun 18 2025 (4:26 PM)":
          - paragraph: Wed, Jun 18 2025 (4:26 PM)
        - cell "Enabled"
        - cell "Currently enabled - click to disable":
          - checkbox [checked]
          - text: Currently enabled - click to disable
        - cell:
          - link:
            - /url: /agents/update/6852be89ddf4084f1893b1ac
            - button:
              - img
          - link:
            - /url: /bank-agent-detail/6852be89ddf4084f1893b1ac
            - button:
              - img
      - row "575083 flipe jon flipejone@gmail.com 13453453453 United States Dallas Fri, May 30 2025 (3:25 PM) Enabled Currently enabled - click to disable":
        - cell "575083":
          - paragraph: "575083"
        - cell "flipe jon":
          - paragraph: flipe jon
        - cell "flipejone@gmail.com":
          - paragraph: flipejone@gmail.com
        - cell "13453453453":
          - paragraph: "13453453453"
        - cell "United States":
          - paragraph: United States
        - cell "Dallas":
          - paragraph: Dallas
        - cell "Fri, May 30 2025 (3:25 PM)":
          - paragraph: Fri, May 30 2025 (3:25 PM)
        - cell "Enabled"
        - cell "Currently enabled - click to disable":
          - checkbox [checked]
          - text: Currently enabled - click to disable
        - cell:
          - link:
            - /url: /agents/update/6839a3be7158c07ad749cb23
            - button:
              - img
          - link:
            - /url: /bank-agent-detail/6839a3be7158c07ad749cb23
            - button:
              - img
      - row "584381 jon yohan sadfsdf@gmail.com 1345345435 United States Dallas Fri, May 30 2025 (3:13 PM) Enabled Currently enabled - click to disable":
        - cell "584381":
          - paragraph: "584381"
        - cell "jon yohan":
          - paragraph: jon yohan
        - cell "sadfsdf@gmail.com":
          - paragraph: sadfsdf@gmail.com
        - cell "1345345435":
          - paragraph: "1345345435"
        - cell "United States":
          - paragraph: United States
        - cell "Dallas":
          - paragraph: Dallas
        - cell "Fri, May 30 2025 (3:13 PM)":
          - paragraph: Fri, May 30 2025 (3:13 PM)
        - cell "Enabled"
        - cell "Currently enabled - click to disable":
          - checkbox [checked]
          - text: Currently enabled - click to disable
        - cell:
          - link:
            - /url: /agents/update/6839a0f57158c07ad749cb10
            - button:
              - img
          - link:
            - /url: /bank-agent-detail/6839a0f57158c07ad749cb10
            - button:
              - img
      - row "999267 sdfsafs asgasfsdf@gmail.com 13523454535 United States Dallas Fri, May 30 2025 (2:49 PM) Enabled Currently enabled - click to disable":
        - cell "999267":
          - paragraph: "999267"
        - cell "sdfsafs":
          - paragraph: sdfsafs
        - cell "asgasfsdf@gmail.com":
          - paragraph: asgasfsdf@gmail.com
        - cell "13523454535":
          - paragraph: "13523454535"
        - cell "United States":
          - paragraph: United States
        - cell "Dallas":
          - paragraph: Dallas
        - cell "Fri, May 30 2025 (2:49 PM)":
          - paragraph: Fri, May 30 2025 (2:49 PM)
        - cell "Enabled"
        - cell "Currently enabled - click to disable":
          - checkbox [checked]
          - text: Currently enabled - click to disable
        - cell:
          - link:
            - /url: /agents/update/68399b447158c07ad749caed
            - button:
              - img
          - link:
            - /url: /bank-agent-detail/68399b447158c07ad749caed
            - button:
              - img
      - row "113615 sdgdfgd gaffes@gmail.com 493455345345 Germany Berlin Fri, May 30 2025 (2:42 PM) Enabled Currently enabled - click to disable":
        - cell "113615":
          - paragraph: "113615"
        - cell "sdgdfgd":
          - paragraph: sdgdfgd
        - cell "gaffes@gmail.com":
          - paragraph: gaffes@gmail.com
        - cell "493455345345":
          - paragraph: "493455345345"
        - cell "Germany":
          - paragraph: Germany
        - cell "Berlin":
          - paragraph: Berlin
        - cell "Fri, May 30 2025 (2:42 PM)":
          - paragraph: Fri, May 30 2025 (2:42 PM)
        - cell "Enabled"
        - cell "Currently enabled - click to disable":
          - checkbox [checked]
          - text: Currently enabled - click to disable
        - cell:
          - link:
            - /url: /agents/update/6839999f7158c07ad749cad0
            - button:
              - img
          - link:
            - /url: /bank-agent-detail/6839999f7158c07ad749cad0
            - button:
              - img
      - row "490579 pretoria preto@gmail.com 2764356456456 South Africa Pretoria Fri, May 30 2025 (10:31 AM) Enabled Currently enabled - click to disable":
        - cell "490579":
          - paragraph: "490579"
        - cell "pretoria":
          - paragraph: pretoria
        - cell "preto@gmail.com":
          - paragraph: preto@gmail.com
        - cell "2764356456456":
          - paragraph: "2764356456456"
        - cell "South Africa":
          - paragraph: South Africa
        - cell "Pretoria":
          - paragraph: Pretoria
        - cell "Fri, May 30 2025 (10:31 AM)":
          - paragraph: Fri, May 30 2025 (10:31 AM)
        - cell "Enabled"
        - cell "Currently enabled - click to disable":
          - checkbox [checked]
          - text: Currently enabled - click to disable
        - cell:
          - link:
            - /url: /agents/update/68395ebf7158c07ad749cabd
            - button:
              - img
          - link:
            - /url: /bank-agent-detail/68395ebf7158c07ad749cabd
            - button:
              - img
      - row "909410 tati tati@gmail.com 443345353453 United Kingdom london Fri, May 30 2025 (10:16 AM) Enabled Currently enabled - click to disable":
        - cell "909410":
          - paragraph: "909410"
        - cell "tati":
          - paragraph: tati
        - cell "tati@gmail.com":
          - paragraph: tati@gmail.com
        - cell "443345353453":
          - paragraph: "443345353453"
        - cell "United Kingdom":
          - paragraph: United Kingdom
        - cell "london":
          - paragraph: london
        - cell "Fri, May 30 2025 (10:16 AM)":
          - paragraph: Fri, May 30 2025 (10:16 AM)
        - cell "Enabled"
        - cell "Currently enabled - click to disable":
          - checkbox [checked]
          - text: Currently enabled - click to disable
        - cell:
          - link:
            - /url: /agents/update/68395b537158c07ad749ca85
            - button:
              - img
          - link:
            - /url: /bank-agent-detail/68395b537158c07ad749ca85
            - button:
              - img
      - row "702194 cris lala cris@gmail.com 14566456564 United States Dallas Fri, May 30 2025 (10:07 AM) Enabled Currently enabled - click to disable":
        - cell "702194":
          - paragraph: "702194"
        - cell "cris lala":
          - paragraph: cris lala
        - cell "cris@gmail.com":
          - paragraph: cris@gmail.com
        - cell "14566456564":
          - paragraph: "14566456564"
        - cell "United States":
          - paragraph: United States
        - cell "Dallas":
          - paragraph: Dallas
        - cell "Fri, May 30 2025 (10:07 AM)":
          - paragraph: Fri, May 30 2025 (10:07 AM)
        - cell "Enabled"
        - cell "Currently enabled - click to disable":
          - checkbox [checked]
          - text: Currently enabled - click to disable
        - cell:
          - link:
            - /url: /agents/update/683959178f126fb02e47a9cb
            - button:
              - img
          - link:
            - /url: /bank-agent-detail/683959178f126fb02e47a9cb
            - button:
              - img
      - row "680714 sdfdasf fadsafsadf@gmail.com 44464563456 United Kingdom london Fri, May 30 2025 (9:59 AM) Enabled Currently enabled - click to disable":
        - cell "680714":
          - paragraph: "680714"
        - cell "sdfdasf":
          - paragraph: sdfdasf
        - cell "fadsafsadf@gmail.com":
          - paragraph: fadsafsadf@gmail.com
        - cell "44464563456":
          - paragraph: "44464563456"
        - cell "United Kingdom":
          - paragraph: United Kingdom
        - cell "london":
          - paragraph: london
        - cell "Fri, May 30 2025 (9:59 AM)":
          - paragraph: Fri, May 30 2025 (9:59 AM)
        - cell "Enabled"
        - cell "Currently enabled - click to disable":
          - checkbox [checked]
          - text: Currently enabled - click to disable
        - cell:
          - link:
            - /url: /agents/update/6839576c7158c07ad749ca66
            - button:
              - img
          - link:
            - /url: /bank-agent-detail/6839576c7158c07ad749ca66
            - button:
              - img
      - row "747714 Golika yoha golikayoha@gmail.com 446546567887 United Kingdom London Fri, May 30 2025 (9:26 AM) Enabled Currently enabled - click to disable":
        - cell "747714":
          - paragraph: "747714"
        - cell "Golika yoha":
          - paragraph: Golika yoha
        - cell "golikayoha@gmail.com":
          - paragraph: golikayoha@gmail.com
        - cell "446546567887":
          - paragraph: "446546567887"
        - cell "United Kingdom":
          - paragraph: United Kingdom
        - cell "London":
          - paragraph: London
        - cell "Fri, May 30 2025 (9:26 AM)":
          - paragraph: Fri, May 30 2025 (9:26 AM)
        - cell "Enabled"
        - cell "Currently enabled - click to disable":
          - checkbox [checked]
          - text: Currently enabled - click to disable
        - cell:
          - link:
            - /url: /agents/update/68394f838f126fb02e47a985
            - button:
              - img
          - link:
            - /url: /bank-agent-detail/68394f838f126fb02e47a985
            - button:
              - img
  - text: "Rows per page:"
  - button "10":
    - text: "10"
    - img
  - list:
    - listitem "Previous Page":
      - img
    - listitem "1"
    - listitem "2"
    - listitem "Next Page":
      - img
  - text: Copyright © 2025 CONNECT System | EagleLion System Technology. All rights reserved.
- region "Notifications alt+T"
- alert: Agents - Connect Dashboard
```

# Test source

```ts
   1 | import {test} from "@playwright/test"
   2 | export class pagination {
   3 |     constructor(page){
   4 |         this.page =page;
   5 |         this.agentMenu = page.getByRole("link", { name: "Agents" });
   6 |         this.pageSizeButton = page.locator('#headlessui-listbox-button-\\:r99\\:');
   7 |         this.option = page.getByRole('option', { name: '10' });
   8 |     }
   9 |       async navigate() {
  10 |     await this.agentMenu.click();
  11 |     // await expect(this.page).toHaveURL(/.*agents/);
  12 |     }
  13 |     async agentPaginationbutton(){
> 14 |     await this.pageSizeButton.click();
     |                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  15 |     }
  16 |     async paginationOption(){
  17 |     await this.option.click();
  18 | }
  19 |
  20 |
  21 |
  22 | }
```