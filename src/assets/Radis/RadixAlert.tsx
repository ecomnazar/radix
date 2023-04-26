import * as AlertDialog from "@radix-ui/react-alert-dialog";
import React from "react";
import './RadixAlert.css'

const RadixAlert = () => {
  return (
    <div className="h-[100vh] bg-blue-300 flex items-center justify-center">
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <button className="Button violet">Delete account</button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="AlertDialogOverlay" />
          <AlertDialog.Content className="AlertDialogContent">
            <AlertDialog.Title className="AlertDialogTitle">
              Are you absolutely sure?
            </AlertDialog.Title>
            <AlertDialog.Description className="AlertDialogDescription">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialog.Description>
            <div
              style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}
            >
              <AlertDialog.Cancel asChild>
                <button className="Button mauve">Cancel</button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button className="Button red">Yes, delete account</button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
};

export default RadixAlert;
