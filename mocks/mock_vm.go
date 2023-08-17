// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/NethermindEth/juno/vm (interfaces: VM)

// Package mocks is a generated GoMock package.
package mocks

import (
	reflect "reflect"

	core "github.com/NethermindEth/juno/core"
	felt "github.com/NethermindEth/juno/core/felt"
	utils "github.com/NethermindEth/juno/utils"
	gomock "github.com/golang/mock/gomock"
)

// MockVM is a mock of VM interface.
type MockVM struct {
	ctrl     *gomock.Controller
	recorder *MockVMMockRecorder
}

// MockVMMockRecorder is the mock recorder for MockVM.
type MockVMMockRecorder struct {
	mock *MockVM
}

// NewMockVM creates a new mock instance.
func NewMockVM(ctrl *gomock.Controller) *MockVM {
	mock := &MockVM{ctrl: ctrl}
	mock.recorder = &MockVMMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockVM) EXPECT() *MockVMMockRecorder {
	return m.recorder
}

// Call mocks base method.
func (m *MockVM) Call(arg0, arg1 *felt.Felt, arg2 []felt.Felt, arg3, arg4 uint64, arg5 core.StateReader, arg6 utils.Network) ([]*felt.Felt, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Call", arg0, arg1, arg2, arg3, arg4, arg5, arg6)
	ret0, _ := ret[0].([]*felt.Felt)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Call indicates an expected call of Call.
func (mr *MockVMMockRecorder) Call(arg0, arg1, arg2, arg3, arg4, arg5, arg6 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Call", reflect.TypeOf((*MockVM)(nil).Call), arg0, arg1, arg2, arg3, arg4, arg5, arg6)
}

// Execute mocks base method.
func (m *MockVM) Execute(arg0 []core.Transaction, arg1 []core.Class, arg2, arg3 uint64, arg4 *felt.Felt, arg5 core.StateReader, arg6 utils.Network, arg7 []*felt.Felt, arg8 bool) ([]*felt.Felt, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Execute", arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8)
	ret0, _ := ret[0].([]*felt.Felt)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Execute indicates an expected call of Execute.
func (mr *MockVMMockRecorder) Execute(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Execute", reflect.TypeOf((*MockVM)(nil).Execute), arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8)
}
