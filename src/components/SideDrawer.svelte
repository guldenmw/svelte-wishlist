<script>
  import Drawer, { AppContent, Content, Header, Title, Subtitle, Scrim } from '@smui/drawer';
  import Button, { Label, Icon } from '@smui/button';
  import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';
  import { isSideDrawerOpen } from '../modules/stores'

  let active = 'Inbox';

  function setActive(value) {
    active = value;
  }
</script>

<Drawer variant="dismissible" bind:open={$isSideDrawerOpen} id="side-drawer">
  <Header>
    <Title>My Wishlists</Title>
  </Header>
  <List>
    <Item href="javascript:void(0)" on:click={() => setActive('Inbox')} activated={active === 'Inbox'}>
      <Graphic class="material-icons" aria-hidden="true">inbox</Graphic>
      <Text>Personal</Text>
    </Item>
    <Item href="javascript:void(0)" on:click={() => setActive('Star')} activated={active === 'Star'}>
      <Graphic class="material-icons" aria-hidden="true">star</Graphic>
      <Text>Star</Text>
    </Item>
    <Item href="javascript:void(0)" on:click={() => null} activated={false}>
<!--      <Graphic class="material-icons" aria-hidden="true"></Graphic>-->
      <Icon class="material-icons">add_circle_outline</Icon><Label>Add new list</Label>
    </Item>

    <Separator nav/>
    <Item href="javascript:void(0)" on:click={() => setActive('Family')} activated={active === 'Family'}>
      <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
      <Text>Shared</Text>
    </Item>
    <Item href="javascript:void(0)" on:click={() => setActive('Friends')} activated={active === 'Friends'}>
      <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
      <Text>Friends</Text>
    </Item>
  </List>
</Drawer>

<!--<Scrim/>-->

<style>
  @media (max-width: 340px) {
    #side-drawer {
      width: 100%;
    }
  }
</style>
