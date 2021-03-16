import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useTutorInfoStyles } from '@mui-treasury/styles/info/tutor';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import Add from '@material-ui/icons/Add';
import SettingsCellIcon from '@material-ui/icons/SettingsCell';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';

const useStyles = makeStyles(() => ({
  actionAdd: {
    backgroundColor: '#fff',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
    marginRight: '20px',
  },

  actionDelete: {
    backgroundColor: '#FFC3B8',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
    marginRight: '20px',
  },

  row: {
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
    marginBottom: '32px',
    // pointerEvents: 'none',
  },

  item: {
    '&:last-child': {
      marginRight: '0px',
    },
  },

  numberItem: {
    fontSize: '2.25rem',
    fontWeight: 700,
    margin: '0 20px',
  },

  buttonNumber: {
    fontSize: '18px',
    padding: '0 20px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
  },

  icon: {
    alignSelf: 'flex-end',
  },
}));

export const DeviceAdded = React.memo(function TutorCard({
  element,
  index,
  handleDeleteEquipo,
  setOpenEditor,
  setCurrentIndex,
  equipos,
  setData,
  instanceRef,
  indexSelectedRef,
}) {
  const styles = useStyles();
  const iconBtnStyles = useSizedIconButtonStyles({
    padding: 6,
    boxShadow: '0px 3px 6px rgba(0,0,0.16)',
  });
  const avatarStyles = useDynamicAvatarStyles({ radius: 12, size: 48 });

  const handleOpenEditor = () => {
    // setOpenEditor(true);

    // if (!instanceRef.current){

    // }

    // setOpenEditor((state) => {
    //   instanceRef.current.render(equipos[index].content);

    //   return true;
    // });
    // if (instanceRef.current) {
    //   instanceRef.current.destroy();
    // }

    // instanceRef.current.render(equipos[index].content);

    console.log(equipos, 'Handle', 'index=', index);
    // setData(equipos[index].content);

    console.log(instanceRef);
    setOpenEditor(true);
    indexSelectedRef.current = index;
    // setCurrentIndex(index);

    // setOpenEditor(true);
    // setOpenEditor(false);
    // setOpenEditor((preval) => !preval);
  };
  return (
    <Row
      p={1.5}
      gap={2}
      bgcolor={'#FFFF'}
      borderRadius={16}
      className={styles.row}
      onClick={handleOpenEditor}
    >
      <Item position={'middle'} className={styles.icon}>
        {/* <Avatar
          classes={avatarStyles}
          src={
            'https://www.biography.com/.image/t_share/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg'
          }
        /> */}
        <SettingsCellIcon fontSize="large" />
      </Item>
      <Item className={styles.numberItem}>{index}</Item>

      <Info position={'middle'} useStyles={useTutorInfoStyles}>
        <InfoTitle>{element.nombreEquipo}</InfoTitle>
        <InfoSubtitle>{element.numeroSerie}</InfoSubtitle>
      </Info>
      <Item ml={1} position={'middle'} className={styles.item}>
        <IconButton
          onClick={handleOpenEditor}
          className={styles.actionAdd}
          classes={iconBtnStyles}
        >
          <Add />
        </IconButton>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteEquipo(index);
          }}
          className={styles.actionDelete}
          classes={iconBtnStyles}
        >
          <CloseSharpIcon fontSize="small" />
        </IconButton>
      </Item>
    </Row>
  );
});

export default DeviceAdded;
