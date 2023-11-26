import { useCallback, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid';
import {
  Box,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { useDebounce } from 'use-debounce';
import { CmsForm, Column, Input, Table } from '@/components';
import { useAppDispatch } from '@/hooks/common-hook';
import {
  createUser,
  deleteUser,
  getDetailUser,
  getListUser,
  updateUser,
} from '@/redux/slices';
import { ModalServices } from '@/services/modal-service';
import { colors } from '@/themes/colors';
import {
  DefaultStatus,
  IErrorsProps,
  IUpdate,
} from '@/types/common-global.types';
import { ICreateUser, IUpdateUser, IUser } from '@/types/user.types';

export const UsersPage = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, setValue, reset } = useForm({
    shouldUseNativeValidation: true,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(25);
  // const [status, setStatus] = useState<string>('');
  const [users, setUsers] = useState<IUser[]>([]);
  const [totalUser, setTotalUser] = useState<number>(0);
  const [searchStr, setSearchStr] = useState<string>('');
  const [debounceContent] = useDebounce(searchStr, 500);
  const [anchorElStatus, setAnchorElStatus] = useState<{
    [key: string]: HTMLElement;
  } | null>(null);

  const handleClickStatus = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string,
  ) => {
    setAnchorElStatus({ [id]: event.target } as any);
  };
  const handleCloseMenuStatus = () => {
    setAnchorElStatus(null);
  };

  const fetchUserList = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data, totalItem } = await dispatch(
        getListUser({
          page,
          pageSize,
          content: debounceContent ? debounceContent : undefined,
          sortBy: 'updated_at',
          sortOrder: 'desc',
        }),
      ).unwrap();
      setUsers(data as IUser[]);
      setTotalUser(totalItem);
    } catch (error: any) {
      ModalServices.showMessageError({ message: error.message });
    } finally {
      setIsLoading(false);
    }
  }, [debounceContent, dispatch, page, pageSize]);

  useEffect(() => {
    fetchUserList();
  }, [fetchUserList]);

  const handleSearch = (content: string) => setSearchStr(content);

  const handleChangeStatus = ({
    status,
    data,
  }: {
    status: DefaultStatus;
    data: any;
  }) => {
    return async () => {
      setAnchorElStatus(null);
      try {
        await dispatch(
          updateUser({
            data: { status },
            id: data.id,
          }),
        ).unwrap();
        await fetchUserList();
        ModalServices.showMessageSuccess({
          message: 'Update status successfully',
        });
      } catch (error) {
        ModalServices.showMessageError({
          message: 'Update status failed',
        });
      }
    };
  };

  const handleClickDelete = (id: number) => {
    return () => {
      ModalServices.showConfirmModal({
        title: 'Are you sure?',
        message: 'Are you sure delete this user?',
        onConfirm: () => handleDelete(id),
        onCancel: () => {},
      });
    };
  };

  const handleClickCreate = () => {
    const createForm = (
      <div className=" flex flex-1 flex-col justify-between pr-7 pl-7">
        <div>
          <Input
            placeholder="Full Name"
            label="Full Name"
            register={register}
            name="full_name"
          />
          <Input
            placeholder="Email"
            label="Email"
            required
            register={register}
            name="email"
          />
          <Input
            placeholder="Phone Number"
            label="Phone Number"
            register={register}
            name="phone_number"
          />
        </div>
      </div>
    );
    ModalServices.showFormModal({
      sx: {
        minWidth: 500,
        borderRadius: 10,
      },
      loading: isLoading,
      title: 'Create User',
      submitTitle: 'Submit',
      onConfirm: handleSubmit(handleCreate),
      onCancel: () => {
        reset();
      },
      children: createForm,
    });
  };

  const handleClickEdit = (id: number) => {
    return async () => {
      try {
        const user = await dispatch(getDetailUser(id)).unwrap();
        setValue('id', id);
        const detailForm = (
          <div className=" flex flex-1 flex-col justify-between pr-7 pl-7">
            <div>
              <Input
                placeholder="Full Name"
                label="Full Name"
                defaultValue={user?.full_name}
                register={register}
                name="data.full_name"
              />
              <Input
                placeholder="Email"
                label="Email"
                required
                defaultValue={user?.email}
                register={register}
                name="data.email"
              />
              <Input
                placeholder="Phone Number"
                label="Phone Number"
                defaultValue={user?.phone_number}
                register={register}
                name="data.phone_number"
              />
            </div>
          </div>
        );
        ModalServices.showFormModal({
          sx: {
            minWidth: 500,
            borderRadius: 10,
          },
          loading: isLoading,
          title: 'User',
          submitTitle: 'Submit',
          onConfirm: handleSubmit(data => {
            data.data.status = user.status;
            return handleUpdate(data);
          }),
          onCancel: reset,
          children: detailForm,
        });
      } catch (error: any) {
        ModalServices.showMessageError({ message: error.message });
      }
    };
  };

  const handleCreate = async (data: ICreateUser) => {
    try {
      setIsLoading(true);
      await dispatch(createUser(data as ICreateUser)).unwrap();
      ModalServices.showMessageSuccess({
        message: 'Create user successfully',
      });
      reset();
      await fetchUserList();
    } catch (error) {
      const err = error as IErrorsProps;
      ModalServices.showMessageError({ message: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async (data: FieldValues) => {
    try {
      setIsLoading(true);
      await dispatch(updateUser(data as IUpdate<IUpdateUser>)).unwrap();
      ModalServices.showMessageSuccess({
        message: 'Update user successfully',
      });
      reset();
      await fetchUserList();
    } catch (error) {
      const err = error as IErrorsProps;
      ModalServices.showMessageError({ message: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      setIsLoading(true);
      await dispatch(deleteUser(id)).unwrap();
      ModalServices.showMessageSuccess({
        message: 'Delete user successfully',
      });
      await fetchUserList();
    } catch (error) {
      const err = error as IErrorsProps;
      ModalServices.showMessageError({ message: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  const columns: Column[] = [
    {
      id: 'index',
      label: 'ID',
      width: '10%',
    },
    {
      id: 'full_name',
      label: 'Full Name',
      width: '20%',
      align: 'left',
    },
    {
      id: 'email',
      label: 'Email',
      width: '20%',
      align: 'left',
    },
    {
      id: 'phone_number',
      label: 'Phone Number',
      width: '20%',
      align: 'left',
    },
    {
      id: 'created_at',
      label: 'Created At',
      width: '15%',
      align: 'left',
      render: (row: any) =>
        dayjs(new Date(row.created_at)).format('DD/MM/YYYY'),
    },
    {
      id: 'status',
      label: 'Status',
      width: '15%',
      align: 'left',
      render: (row: any) => {
        return (
          <div>
            <button
              onClick={(e: any) => handleClickStatus(e, row.id)}
              id="basic-button"
              aria-controls={
                anchorElStatus?.[row.id] ? 'basic-menu' : undefined
              }
              aria-haspopup="true"
              aria-expanded={anchorElStatus?.[row.id] ? 'true' : undefined}>
              <Chip
                sx={{ textTransform: 'capitalize' }}
                label={row.status}
                color={
                  row.status === DefaultStatus.Active ? 'success' : 'error'
                }
              />
            </button>
            <Menu
              elevation={1}
              id={row.id}
              anchorEl={anchorElStatus?.[row.id]}
              open={!!anchorElStatus?.[row.id]}
              onClose={handleCloseMenuStatus}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}>
              <MenuItem
                onClick={handleChangeStatus({
                  status: DefaultStatus.Active,
                  data: row,
                })}>
                <Typography color={colors.success}>Active</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleChangeStatus({
                  status: DefaultStatus.Inactive,
                  data: row,
                })}>
                <Typography color={colors.error}>Inactive</Typography>
              </MenuItem>
            </Menu>
          </div>
        );
      },
    },
    {
      id: 'action',
      label: 'Action',
      width: '10%',
      align: 'center',
      render: (row: any) => {
        return (
          <Box display="flex" flexDirection="row">
            <IconButton color="primary" onClick={handleClickEdit(row.id)}>
              <PencilSquareIcon height={24} />
            </IconButton>

            <IconButton color="error" onClick={handleClickDelete(row.id)}>
              <TrashIcon height={24} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const rows = users?.length
    ? users.map((user, index) => ({
        id: user.id,
        index: index + 1,
        full_name: user.full_name,
        email: user.email,
        phone_number: user.phone_number,
        status: user.status,
        created_at: user.created_at,
      }))
    : [];

  return (
    <>
      <CmsForm
        title="User Page"
        onCreateNew={handleClickCreate}
        onSearch={handleSearch}>
        <Table
          rows={rows}
          loading={isLoading}
          columns={columns}
          isShowPagination
          paginationProps={{
            page,
            count: totalUser,
            rowsPerPage: pageSize,
            onPageChange: page => setPage(page + 1),
            onRowsPerPageChange: event => setPageSize(+event.target.value),
          }}
        />
      </CmsForm>
    </>
  );
};
