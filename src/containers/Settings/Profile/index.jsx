import React, { Component } from 'react';
import { HBProfile, HBProfileRow, HBProfileColumn } from './../../../components/HBSettings/HBProfile'

class Profile extends Component {
    render() {
        const { UserConfigData } = this.props
        return (
            <HBProfile>
                <div style={{ maxWidth: '500px' }}>
                    <h3>Profile</h3>
                    <HBProfileRow>
                        <HBProfileColumn>Email</HBProfileColumn>
                        <HBProfileColumn>{UserConfigData.Data.hasOwnProperty(`Email`) && UserConfigData.Data.Email}</HBProfileColumn>
                    </HBProfileRow>
                    <HBProfileRow>
                        <HBProfileColumn>Verification level</HBProfileColumn>
                        <HBProfileColumn>{UserConfigData.Data.hasOwnProperty(`VerificationLevel`) && UserConfigData.Data.VerificationLevel}</HBProfileColumn>
                    </HBProfileRow>
                    <HBProfileRow>
                        <HBProfileColumn>First Name</HBProfileColumn>
                        <HBProfileColumn>{UserConfigData.Data.hasOwnProperty(`firstName`) && UserConfigData.Data.firstName}</HBProfileColumn>
                    </HBProfileRow>
                    <HBProfileRow>
                        <HBProfileColumn>Last Name</HBProfileColumn>
                        <HBProfileColumn>{UserConfigData.Data.hasOwnProperty(`lastName`) && UserConfigData.Data.lastName}</HBProfileColumn>
                    </HBProfileRow>
                    <HBProfileRow>
                        <HBProfileColumn>Date of Birth</HBProfileColumn>
                        <HBProfileColumn>{UserConfigData.Data.hasOwnProperty(`dob`) && UserConfigData.Data.dob}</HBProfileColumn>
                    </HBProfileRow>
                    <HBProfileRow>
                        <HBProfileColumn>Address</HBProfileColumn>
                        <HBProfileColumn>
                            {UserConfigData.Data.hasOwnProperty(`billingStreetAddress`) && UserConfigData.Data.billingStreetAddress}, {UserConfigData.Data.hasOwnProperty(`billingCity`) && UserConfigData.Data.billingCity}, {UserConfigData.Data.hasOwnProperty(`billingState`) && UserConfigData.Data.billingState}, {UserConfigData.Data.hasOwnProperty(`billingCountry`) && UserConfigData.Data.billingCountry}
                        </HBProfileColumn>
                    </HBProfileRow>
                </div>
            </HBProfile>
        );
    }
}

export default Profile;